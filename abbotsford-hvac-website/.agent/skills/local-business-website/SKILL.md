---
name: local-business-website
description: A reusable skill for building high-ranking local business websites using a consistent Core-30 + Service-Area architecture. Defines structure, workflow, and content requirements for any local business niche.
---

# Local Business Website Skill

A reusable skill for building high‑ranking local business websites using a consistent Core‑30 + Service‑Area architecture. This skill defines the structure, workflow, and content requirements for any local business niche.

## 1. Purpose
Use this skill whenever generating:
- A full site architecture
- Page layouts
- Content outlines
- Internal linking maps
- URL structures
- Geo‑service expansions
- Prompts for AI‑assisted site generation

This skill ensures every local business website follows the same proven structure, regardless of niche, city, or service list.

## 2. Required Inputs
When invoking this skill, the user must provide:

- **Business Type** (e.g., HVAC, Plumbing, Roofing)
- **Primary City** (GBP city)
- **Service Categories** (3–10)
- **Child Services** under each category
- **Service Areas** (neighbourhoods, suburbs, nearby towns)
- **Optional:** High‑value “core services”

## 3. Core Architecture Rules

### 3.1 Site Layers
Every local business website must include:

1. **Homepage**  
   - Targets primary service + primary city  
   - Links to all category pages  
   - Includes service area summary  
   - Includes trust elements, CTAs, reviews, map embed  

2. **Category Pages**  
   - One page per service category  
   - Lists and links to all child services  
   - Links back to homepage  

3. **Service Pages**  
   - One page per service  
   - Targets “service + city”  
   - Links back to category page  
   - Links to service areas  

4. **Service Area Hub**  
   - `/service-areas/`  
   - Lists all areas served  

5. **Service Area Pages**  
   - One page per neighbourhood/suburb  
   - Links to main service pages  
   - Mentions local relevance  

6. **Geo‑Service Pages** (optional, high‑value only)  
   - `/service-areas/{area}/{service}/`  
   - Only for top money services in top areas  

7. **Support Pages**  
   - About  
   - Contact  
   - Reviews  
   - Financing (optional)

## 4. URL Structure Rules

### 4.1 Category Pages
`/{category-slug}/`

### 4.2 Service Pages
`/{category-slug}/{service-slug}/`

### 4.3 Service Area Pages
`/service-areas/{area-slug}/`

### 4.4 Geo‑Service Pages
`/service-areas/{area-slug}/{service-slug}/`

## 5. Internal Linking Rules

### Homepage →  
- All category pages  
- Service areas hub  

### Category Pages →  
- All child service pages  
- Homepage  

### Service Pages →  
- Parent category page  
- Homepage  
- Service areas hub  

### Service Area Pages →  
- Service areas hub  
- Top service pages  
- Homepage  

### Geo‑Service Pages →  
- Parent area page  
- Parent service page  
- Homepage  

## 6. JSON‑Like Architecture Output Format
When asked to generate a site map, output in this structure:

```json
{
"domain": "",
"primary_city": "",
"core_categories": [],
"site_structure": {
"homepage": "/",
"primary_category_pages": {},
"service_pages": {},
"support_pages": [],
"service_area_pages": [],
"service_area_url_structure": "/service-areas/{area}/",
"geo_service_url_structure": "/service-areas/{area}/{service}/"
},
"internal_linking_rules": {}
}
```

## 7. Content Generation Prompts

### 7.1 Homepage Prompt
Write the homepage for a {{BUSINESS_TYPE}} company in {{PRIMARY_CITY}}.
Focus on user problems, fast solutions, and transactional intent.
Include sections for each service category.
Include CTAs, trust elements, service area summary, and map/reviews placeholders.

### 7.2 Category Page Prompt
Write a category page for {{CATEGORY_NAME}} in {{PRIMARY_CITY}}.
List all child services and write short sections for each.
Include CTAs and internal links.

### 7.3 Service Page Prompt
Write a service page for {{SERVICE_NAME}} in {{PRIMARY_CITY}}.
Include symptoms, causes, benefits, process, and CTAs.
Link back to the category page.

### 7.4 Service Area Page Prompt
Write a service area page for {{AREA_NAME}}.
Mention heating/cooling/plumbing/etc. depending on business type.
Link to main service pages.

### 7.5 Geo‑Service Page Prompt
Write a geo-service page for {{SERVICE_NAME}} in {{AREA_NAME}}.
Link to parent service page, area page, and homepage.

## 8. Technical SEO Requirements
Every build must include:

- LocalBusiness schema  
- Service schema on service pages  
- Breadcrumb schema  
- XML sitemap  
- Robots.txt  
- Clean URL structure  
- Fast hosting + SSR  
- No orphan pages  

## 9. Output Requirements
When this skill is invoked, the assistant must output:

1. **Full site architecture**  
2. **URL map**  
3. **Internal linking map**  
4. **Content prompts**  
5. **Optional:** Geo‑service expansion plan  

All outputs must follow the structure defined in this skill.

## 10. Reusability
This skill must work for any:

- Business type  
- City  
- Service list  
- Service area list  

Simply swap the variables:

- {{BUSINESS_TYPE}}  
- {{PRIMARY_CITY}}  
- {{CATEGORY_NAME}}  
- {{SERVICE_NAME}}  
- {{AREA_NAME}}
