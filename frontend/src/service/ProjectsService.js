import dashboardImage1 from '../assets/dashboard-register.png'
import dashboardImage2 from '../assets/dashboard-login.png'
import dashboardImage3 from '../assets/dashboard-home.png'

import coursesImage1 from '../assets/courses-register.png'
import coursesImage2 from '../assets/courses-login.png'
import coursesImage3 from '../assets/courses-home.png'
import coursesImage4 from '../assets/courses-featured.png'
import coursesImage5 from '../assets/courses-about.png'
import coursesImage6 from '../assets/courses-offer1.png'
import coursesImage7 from '../assets/courses-offer2.png'
import coursesImage8 from '../assets/courses-cart.png'
import coursesImage9 from '../assets/courses-docs.png'

import shoesImage1 from '../assets/shoes-login.png'
import shoesImage2 from '../assets/shoes-home.png'
import shoesImage3 from '../assets/shoes-featured.png'
import shoesImage4 from '../assets/shoes-offer.png'

import taskImage1 from '../assets/tasks-home.png'

import bootcampImage1 from "../assets/spring-bootcamp1.png"

export const projectDashboard = () => {
    return {
        name: 'Dashboard para gestion general',
        type: 'Fullstack',
        stack: 'Java, Spring, Javascript, React Js, PostgreSQL, Docker, AWS, JUnit 5, Material UI y Swagger 2.',
        description: 'La aplicación consta de un dashboard(o panel de control/comando) orientado a la gestión de tareas, contactos y notas del usuario. La autenticación del mismo y persistencia de datos fue desarrollada con JWT, Spring Data JPA y Spring Security. Además, hice uso del servicio S3 Buckets de Amazon Web Service el cual, en este caso, es aprovechado para almacenar la imagen de perfil de cada usuario. La documentación de la API fue generada a través de Swagger 2. Actualmente el proyecto se encuentra en su fase final. Una vez finalizado, se hará un deploy a la nube para que pueda ser utilizado en la Web.',
        images: [
          dashboardImage1,
          dashboardImage2, 
          dashboardImage3
        ],
        repo: 'https://github.com/FeliWeigel/FullStackProject-Aws-S3'
      }
}

export const projectCoursesPlatform = () => {
    return {
        name: 'Plataforma de cursos online',
        type: 'Fullstack',
        stack: 'Java, Spring, Javascript, React Js, PostgreSQL, Material UI y Swagger 2.',
        description: 'En esta ocasión, mi idea fue "imitar" plataformas tales como Udemy, Platzi, OpenBootcamp, etc. La aplicación esta desarrollada en Java(Backend) y Javascript(Frontend) acompañado de React y Spring respectivamente. El sistema de gestión de bases de datos utilizado es PostgreSQL y la documentación de la API fue generada a partir de Swagger 2. A nivel interfaz hice uso de Material UI para la creación de componentes visuales que mejoren la experiencia de usuario. El proyecto consta de un registro y autenticación de usuarios con JWT, una sección de administración CRUD a la cual solo se accede con el Admin Role, listado de cursos destacados y, de la totalidad de los mismos junto a filtros por tipo, nombre y proximamente por dificultad. A esto, se le suma el carrito de compras del cual, hasta el momento, fue implementada su previsualización e interfaz completa y parte de la logica funcional en torno al mismo.',
        images: [
          coursesImage1,
          coursesImage2,
          coursesImage3,
          coursesImage4,
          coursesImage5,
          coursesImage6,
          coursesImage7,
          coursesImage8,
          coursesImage9
        ],
        repo: 'https://github.com/FeliWeigel/Plataforma-cursos-spring-react'
      }
}

export const projectShoesEcommerce = () => {
  return {
      name: 'E-Commerce de zapatillas',
      type: 'Fullstack',
      stack: 'Java, Spring, Javascript, React Js, PostgreSQL.',
      description: 'Plataforma Ecommerce de zapatillas desarrollada en React Js. y Spring Framework. Seguridad, autenticación de usuarios(uso de Cookies), carga de archivos a entidades de la base de datos(PostgreSQL) utilizando Thymeleaf y Bootstrap, almacenando solo la referencia a la ruta de las imagenes y no al archivo en si. Cuenta con un registro e inicio de sesión utilizando JSON Web Token como metodo de autenticación, y luego, variedad de secciones entre las cuales se destacan el home de la aplicación, productos destacados, sección informativa de "About Us" y el listado total de zapatillas con su respectivo buscador funcional.',
      images: [
        shoesImage1,
        shoesImage2,
        shoesImage3,
        shoesImage4
      ],
      repo: 'https://github.com/FeliWeigel/Shoes-Ecommerce'
    }
}

export const projectTaskManager = () => {
    return {
        name: 'Administrador de tareas',
        type: 'Fullstack',
        stack: 'Java, Spring, Javascript, React Js, PostgreSQL y Swagger 2.',
        description: 'Administrador de tareas orientado a la gestión de operaciones CRUD(Create, Read, Update, Delete) desarrollado en Spring Boot(Data JPA, Spring Security, JWT) y React Js. Consta de un panel (similar a un cuadro de doble entrada) con el listado de tareas y operaciones posibles. Permite al usuario(excluyentemente debe estar registrado y autenticado)la lectura, adición, modificación y eliminación de tareas.',
        images: [
          taskImage1
        ],
        repo: 'https://github.com/FeliWeigel/React-Spring-TaskManager'
      }
}

export const projectSpringBootcamp = () => {
    return {
        name: 'Práctica final Spring Bootcamp',
        type: 'Backend / API',
        stack: 'Java, Spring, JUnit 5, Swagger 2.',
        description: 'Este proyecto fue la práctica final del roadmap de OpenBootcamp para Java Fullstack Dev. (Java, Springboot, JUnit 5, MySQL, Swagger 2, JWT auth.) en donde tuve la oportunidad de aprender mucho de lo que sé relacionado a Spring Framework y al desarrollo Backend con Java. Si bien en el bootcamp se desarrolla utilizando MySQL como gestor de base de datos, yo utilicé PostgreSQL por una cuestión de preferencia, aunque podría usarse cualquier otro gestor. El proyecto consta de un sistema Backend completo basado en la arquitectura API REST, el cual cuenta con protocolos de seguridad(definidos con Spring Security), autenticación y validación de usuarios(con JWT), documentación de la API(con Swagger 2), manipulación y persistencia de datos(Springboot, Spring Data JPA) y testing unitario con JUnit 5. Además, se pone en práctica algunos patrones de diseño tales como el patron Builder, Chain of responsibility, etc.',
        images: [
          bootcampImage1
        ],
        repo: 'https://github.com/FeliWeigel/Spring-Bootcamp-Practica'
      }
}