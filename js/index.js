const verPromociones = () => {
  let container = document.querySelector(".content");

  promociones.forEach((element) => {
    container.innerHTML +=
        `<a href=\"detalle.html?id=${element.id}\">` +
        '<div class="journal__entry">' +
            '<div class="journal__entry-picture">' +
                `<div class='img'>` +
                    `<img src=\"${element.urlImg}\" width=\"120px\"/>` +
                `</div>` +
            "</div>" +
            '<div class="journal__entry-body">' +
                '<p class="journal__highlight">' +
                    `${element.empresa}` +
                "</p>" +
               `<div class="journal__entry-container">`+
                    `<p class=\"journal__entry-title\" 'style="font-size: 11px;"'> ` +
                        `${element.calificacion}` + 
                    "</p>" +
                    `<label><img src=\"img/score_on.png\" class="star" /></label>`+
                    `<span class="separacion"> | </span>`+
                    `<label><img src=\"img/discount_off.png\" class="disxount_off" /></label>`+
                    `<label class="discount_text">Gana hasta $150</label>`+
                `</div>`+
                    
                `<span class="giro">${element.giro}</span>`+
                `<p class="journal__entry-content"> ${element.direccion} </p>` +
            "</div>" +
        "</div>" +
        "</a>";
  });
};

verPromociones();
