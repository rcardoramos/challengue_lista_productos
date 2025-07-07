# 🧠 Products Challenge Backend (.NET 9)

Este proyecto backend está desarrollado con **.NET 9** utilizando una **arquitectura hexagonal (Ports & Adapters)**, que permite una separación clara entre la lógica de negocio y la infraestructura, facilitando el mantenimiento, testeo y escalabilidad.

---

## 🏗️ Arquitectura Hexagonal

> También conocida como **Ports & Adapters**, esta arquitectura tiene como objetivo principal **aislar el dominio** de cualquier tecnología o framework externo.

### 🔸 Componentes Principales:

- **Core (Dominio)**: Contiene la lógica de negocio, entidades y casos de uso puros.
- **Ports (Puertos)**: Interfaces que definen contratos (por ejemplo, `IProductRepository`).
- **Adapters (Adaptadores)**: Implementaciones concretas como `ProductRepository` que usa EF Core para acceder a la base de datos.
- **Entradas**: Controladores HTTP o consumidores de eventos.
- **Salidas**: Repositorios, servicios externos, bases de datos.

---

## 📦 Tecnologías Utilizadas

| Tecnología                           | Uso                                        |
| ------------------------------------ | ------------------------------------------ |
| **.NET 9**                           | Framework principal                        |
| **C# 13 (preview)**                  | Lenguaje de programación                   |
| **EF Core**                          | Acceso a base de datos                     |
| **Records (C# 9+)**                  | Para DTOs inmutables y concisos            |
| **Inyección de Dependencias (DI)**   | Gestión automática de dependencias         |
| **Arquitectura Hexagonal**           | Separación entre dominio e infraestructura |
| **Patrón Repository**                | Abstracción del acceso a datos             |
| **Testing (xUnit / Moq)** (opcional) | Testeo del dominio y casos de uso          |

---

## ✨ Principales Beneficios

✅ Aislamiento total del dominio  
✅ Independencia de frameworks (puedes cambiar EF Core, o la DB sin afectar la lógica)  
✅ Testeo fácil de los casos de uso sin base de datos  
✅ Bajo acoplamiento entre componentes  
✅ Estructura clara y escalable

---

## Correr el proyecto :

dotnet run --project infraestructure/api/example.api/. desde la raiz de mantenimiento-net
