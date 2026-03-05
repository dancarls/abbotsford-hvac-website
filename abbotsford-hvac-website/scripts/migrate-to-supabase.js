
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load env vars from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const DATA_PATH = path.join(__dirname, '../src/data/geo-service-data.json');

async function migrate() {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

        console.log('--- Starting Migration ---');

        // 1. Migrate Areas
        console.log('Migrating Areas...');
        for (const area of data.areas) {
            const content = data.area_content[area.slug];
            const { error } = await supabase
                .from('areas')
                .upsert({
                    slug: area.slug,
                    name: area.name,
                    landmark: area.landmark,
                    title: content?.title,
                    description: content?.description,
                    landmark_mention: content?.landmark_mention
                }, { onConflict: 'slug' });

            if (error) console.error(`Error migrating area ${area.slug}:`, error.message);
        }

        // 2. Migrate Services
        console.log('Migrating Services...');
        for (const service of data.services) {
            const { error } = await supabase
                .from('services')
                .upsert({
                    slug: service.slug,
                    name: service.name
                }, { onConflict: 'slug' });

            if (error) console.error(`Error migrating service ${service.slug}:`, error.message);
        }

        // 3. Migrate Content Matrix
        console.log('Migrating Content Matrix...');
        for (const [key, content] of Object.entries(data.content)) {
            const [serviceSlug, areaSlug] = key.split('-');
            const { error } = await supabase
                .from('geo_service_content')
                .upsert({
                    slug: key,
                    service_slug: serviceSlug,
                    area_slug: areaSlug,
                    title: content.title,
                    hero_title: content.hero_title,
                    hero_subtitle: content.hero_subtitle,
                    main_content: content.main_content
                }, { onConflict: 'slug' });

            if (error) console.error(`Error migrating content ${key}:`, error.message);
        }

        console.log('--- Migration Complete ---');
    } catch (error) {
        console.error('Migration failed:', error);
    }
}

migrate();
