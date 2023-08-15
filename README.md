### App de Notas de texto.

Descripción del proyecto.

El proyecto consiste en una aplicación que permita a los usuarios crear notas de sitios que hayan visitado.
Los usuarios pueden registrarse, iniciar sesión y gestionar sus propias notas.
Cada nota está asociada a un usuario y puede tener un título, texto y categoría.
También se pueden realizar operaciones opcionales como editar una nota.

## Entidades

-   User:

-   id
-   email
-   username
-   password
-   createdAt
-   modifiedAt

-   Nota:

-   id
-   userId
-   title
-   text
-   categoryId
-   createdAt

### Endpoints

# Usuarios:

-   POST [/users/register] - Registro de un nuevo usuario. ✅
-   POST [/users/login] - Permite logear un usuario. ✅
-   GET [/users] - Devuelve información del usuario del token. ✅

-   # Notas:

-   GET [/notes] - Obtiene el listado de notas del usuario. ✅
-   GET [/notes/:noteId] - Obtiene información de una nota específica.✅
-   POST [/notes] - Crea una nueva nota. ✅
-   PUT [/notes/:noteId/edit] - Modificar una nota existente.✅

# Categorias:

-   POST [/categories] Crea una nueva categoria. ✅
-   GET [/categories] - Devuelve todas las categorias. ✅
-   PUT [/categories/:categoryId] - Editar una categoria existente. ✅
