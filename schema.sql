CREATE TABLE IF NOT EXISTS vendors (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    title TEXT,
    phone TEXT NOT NULL,
    url TEXT,
    location TEXT,
    description TEXT,
    price_label TEXT,
    price_value NUMERIC,
    currency TEXT DEFAULT 'USD',
    type TEXT DEFAULT 'safari',
    image TEXT,
    keywords TEXT[],
    assets TEXT[],
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY,
    vendor_id UUID REFERENCES vendors(id),
    traveler_name TEXT,
    traveler_phone TEXT,
    price_quoted NUMERIC,
    commission_amount NUMERIC,
    status TEXT DEFAULT 'handoff',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);