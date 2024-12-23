import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [
      {
        id: 1,
        name: "Cuaderno Personalizado",
        precio: "$4990",
        description:
          "Cuaderno de tapa dura con diseño personalizado. Ideal para tus notas y dibujos.",
        url: "https://http2.mlstatic.com/D_NQ_NP_877501-MLC48983060747_012022-O.webp",
        cantidad: 0
      },
      {
        id: 2,
        name: "Agenda Semanal",
        precio: "$12590",
        description:
          "Agenda con diseño elegante y espacio para planificar tu semana de manera efectiva.",
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsg3fO6yXQqyDvbzkBrno2tpsCk8OVkJOF0_lgG5mqzB59ngE2eycpkgkOKaH1plOEq8OsTH35qVJB4B251sLC17MydDCr_yN64pgDYCCiNARMnfDdBjL-osy4zQG-R7Fhc9UaPweMQDY/s16000/slider+1.png",
        cantidad: 0 
      },
      {
        id: 3,
        name: "Calendario de Pared",
        precio: "$3990",
        description:
          "Calendario de pared con imágenes personalizadas para cada mes. Perfecto para decorar tu espacio.",
        url: "https://cdnx.jumpseller.com/regalospersonalizados-cl/image/53668454/A4-2025.jpg?1726956349",
        cantidad: 0 
      },
      {
        id: 4,
        name: "Photobook Familiar",
        precio: "$15490",
        description:
          "Photobook de alta calidad para guardar tus recuerdos familiares. Personalizable con tus fotos.",
        url: "https://weprint.app/cdn/shop/files/phb-06-sinarmado-02.png?v=1694484511&width=1024",
        cantidad: 0 
      },
      {
        id: 5,
        name: "Vela Aromática Personalizada",
        precio: "$4590",
        description:
          "Vela aromática hecha a mano con fragancias personalizadas. Ideal para crear un ambiente acogedor.",
        url: "https://i.ytimg.com/vi/anoxekk3oRc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2ZWWSsOmUWQNaf2g9sKnkU8DkYQ",
        cantidad: 0 
      },
      {
        id: 6,
        name: "Taza Personalizada",
        precio: "$3990",
        description:
          "Taza de cerámica con diseño personalizado. Perfecta para tu café o té diario.",
        url: "https://www.regalooriginal.com/frontend/urls/grande/Taza-personalizada-con-el-interior-de-color-g1.jpg",
        cantidad: 0 
      },
      {
        id: 7,
        name: "Llavero Personalizado",
        precio: "$3500",
        description:
          "Llavero de metal con grabado personalizado. Un detalle único para tus llaves.",
        url: "https://cdn.ready-market.com.tw/941f1f20/Templates/pic/IMG-Custom-Metal-Keychains.jpg?v=09dbbcd6",
        cantidad: 0 
      },
      {
        id: 8,
        name: "Set de Papelería",
        precio: "$25000",
        description:
          "Set completo de papelería con cuadernos, bolígrafos y stickers personalizados.",
        url: "https://www.enriquetaregalabonito.com/on/demandware.static/-/Sites-ilunion-master-catalog/default/dwda58b746/images/regalo-profesores/E22810/E22810-set-de-papeleria-bonita.jpg",
        cantidad: 0 
      },
      {
        id: 9,
        name: "Postales Personalizadas",
        precio: "$1000",
        description:
          "Juego de postales personalizadas para enviar mensajes especiales a tus seres queridos.",
        url: "https://m.media-amazon.com/images/I/71Gc1UNjwfL._AC_UF894,1000_QL80_.jpg",
        cantidad: 0 
      },
      {
        id: 10,
        name: "Planificador Mensual",
        precio: "$7990",
        description:
          "Planificador mensual con espacio para tus metas y tareas. Ideal para mantenerte organizado.",
        url: "https://http2.mlstatic.com/D_Q_NP_617684-MLM73091911932_112023-O.webp",
        cantidad: 0 
      },
      {
        id: 11,
        name: "Cuaderno de Bocetos",
        precio: "$6990",
        description:
          "Cuaderno de tapa blanda con hojas de papel de alta calidad para bocetos y dibujos.",
        url: "https://http2.mlstatic.com/D_Q_NP_727571-MLM73091911932_112023-O.webp",
        cantidad: 0 
      },
      {
        id: 12,
        name: "Set de Marcadores",
        precio: "$4990",
        description:
          "Set de marcadores de alta calidad con diferentes colores y puntas para dibujar y escribir.",
        url: "https://m.media-amazon.com/images/I/71Gc1UNjwfL._AC_UF894,1000_QL80_.jpg",
        cantidad: 0 
      },
      {
        id: 13,
        name: "Libreta de Notas",
        precio: "$3990",
        description:
          "Libreta de notas de tapa blanda con hojas de papel de alta calidad para tomar notas y escribir.",
        url: "https://http2.mlstatic.com/D_Q_NP_617684-MLM73091911932_112023-O.webp",
        cantidad: 0 
      },
      {
        id: 14,
        name: "Calendario de Mesa",
        precio: "$5990",
        description:
          "Calendario de mesa con imágenes personalizadas para cada mes. Perfecto para decorar tu espacio de trabajo.",
        url: "https://cdnx.jumpseller.com/regalospersonalizados-cl/image/53668454/A4-2025.jpg?1726956349",
        cantidad: 0 
      },
      {
        id: 15,
        name: "Taza de Café Personalizada",
        precio: "$6990",
        description:
          "Taza de café personalizada con diseño único y nombre o mensaje personalizado.",
        url: "https://www.regalooriginal.com/frontend/urls/grande/Taza-personalizada-con-el-interior-de-color-g1.jpg",
        cantidad: 0 
      },
      {
        id: 16,
        name: "Lapicera Personalizada",
        precio: "$4990",
        description:
          "Lapicera personalizada con diseño único y nombre o mensaje personalizado.",
        url: "https://cdn.ready-market.com.tw/941f1f20/Templates/pic/IMG-Custom-Metal-Keychains.jpg?v=09dbbcd6",
        cantidad: 0 
      },
      {
        id: 17,
        name: "Cuaderno de Viaje",
        precio: "$8990",
        description:
          "Cuaderno de viaje de tapa dura con hojas de papel de alta calidad para documentar tus aventuras.",
        url: "https://http2.mlstatic.com/D_Q_NP_727571-MLM73091911932_112023-O.webp",
        cantidad: 0 
      },
      {
        id: 18,
        name: "Set de Etiquetas",
        precio: "$2990",
        description:
          "Set de etiquetas personalizadas con diferentes diseños y tamaños para organizar tus pertenencias.",
        url: "https://m.media-amazon.com/images/I/71Gc1UNjwfL._AC_UF894,1000_QL80_.jpg",
        cantidad: 0 
      },
      {
        id: 19,
        name: "Libreta de Apuntes",
        precio: "$4990",
        description:
          "Libreta de apuntes de tapa blanda con hojas de papel de alta calidad para tomar notas y escribir.",
        url: "https://http2.mlstatic.com/D_Q_NP_617684-MLM73091911932_112023-O.webp",
        cantidad: 0 
      },
      {
        id: 20,
        name: "Calendario de Pared Grande",
        precio: "$12990",
        description:
          "Calendario de pared grande con imágenes personalizadas para cada mes. Perfecto para decorar tu espacio de trabajo.",
        url: "https://cdnx.jumpseller.com/regalospersonalizados-cl/image/53668454/A4-2025.jpg?1726956349",
        cantidad: 0 
      },
    ],
  },
  mutations: {
    incrementarCantidad(state, productoId) {
      const producto = state.productos.find(p => p.id === productoId);
      if (producto) {
        if (producto.cantidad === undefined) {
          producto.cantidad = 1;
        } else {
          producto.cantidad++;
        }
      }
    }
  },
  actions: {},
  modules: {},
});
