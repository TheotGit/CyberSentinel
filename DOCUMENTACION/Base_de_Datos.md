# Esquema de Base de Datos - CyberSentinel

## Tabla: users
- **id** (PK, serial)
- **username** (varchar, único, no nulo)
- **email** (varchar, único, no nulo)
- **password_hash** (varchar, no nulo)
- **created_at** (timestamp, default now())

## Tabla: projects
- **id** (PK, serial)
- **user_id** (FK → users.id)
- **name** (varchar, no nulo)
- **description** (text)
- **created_at** (timestamp, default now())

## Tabla: tests
- **id** (PK, serial)
- **project_id** (FK → projects.id)
- **type** (varchar, ej: 'penetration', 'audit')
- **status** (varchar, ej: 'pending', 'running', 'completed')
- **created_at** (timestamp, default now())

## Tabla: results
- **id** (PK, serial)
- **test_id** (FK → tests.id)
- **output** (jsonb)
- **created_at** (timestamp, default now())