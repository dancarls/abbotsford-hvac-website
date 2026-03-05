
-- Tables for Geo-Service Architecture

-- Areas Hub Table
CREATE TABLE IF NOT EXISTS areas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  landmark TEXT,
  title TEXT,
  description TEXT,
  landmark_mention TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Content Matrix Table
CREATE TABLE IF NOT EXISTS geo_service_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL, -- e.g. heating-mission
  service_slug TEXT REFERENCES services(slug),
  area_slug TEXT REFERENCES areas(slug),
  title TEXT,
  hero_title TEXT,
  hero_subtitle TEXT,
  main_content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies (Draft)
ALTER TABLE areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE geo_service_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Access" ON areas FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON services FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON geo_service_content FOR SELECT USING (true);
