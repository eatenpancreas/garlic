-- Add migration script here

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE user_role AS ENUM ('ADMIN', 'MODERATOR', 'USER');

CREATE TABLE users (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   role user_role NOT NULL DEFAULT 'USER',
   email VARCHAR(100) UNIQUE NOT NULL,
   password_hash VARCHAR(100) NOT NULL,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   is_active BOOLEAN NOT NULL DEFAULT TRUE,
   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
