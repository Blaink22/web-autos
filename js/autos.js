const vehicles = {
    autos: [
        {
            name: "bentayga4x4",
            description: "Adddon Normal",
            image: "https://i.postimg.cc/FH5NqgxL/bentayga4x4.png"
        },
        {
            name: "x6mf96lbwk",
            description: "Adddon Normal",
            image: "https://i.postimg.cc/2jQsyRdn/image.png"
        },
        {
            name: "surfpepsiv4",
            description: "Addon Normal + suspension hidraulica manejable y posee texturas bugueadas, que se arreglan en el mecanico",
            image: "https://i.postimg.cc/C1z64X98/image.png",
        },
        {
            name: "24mdxtech",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/rFSZgSZR/image.png",
        },
        {
            name: "23x5",
            description: "Blindaje a puertas cerradas + 30 TN de Peso",
            image: "https://i.postimg.cc/J4YNm0Fw/image.png",
        },
        {
            name: "rmodx6",
            description: "Blindaje de ruedas + 10 TN de Peso",
            image: "https://i.postimg.cc/CxWbBtSF/image.png",
        },
        {
            name: "nisgtir",
            description: "Blindaje a puertas cerradas + 20 TN de peso",
            image: "https://i.postimg.cc/dtVf47dt/image.png",
        },
        {
            name: "ER34N",
            description: "Addon Normal + full detalle con infinidad de calcomanias + 10 TN ",
            image: "https://i.postimg.cc/L51Jp4g9/image.png",
        },
        {
            name: "isetta",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/Cx1RNVwc/image.png",
        },
        {
            name: "yRenault5TB",
            description: "Addon Normal",
            image: "https://i.postimg.cc/g2TntB0K/image.png",
        },
        {
            name: "tbird",
            description: "Addon Normal",
            image: "https://i.postimg.cc/P5RPVFq4/image.png",
        },
        {
            name: "hycf40",
            description: "Addon Normal",
            image: "https://i.postimg.cc/L8bnQ0s3/image.png",
        },
        {
            name: "captiva2010",
            description: "Addon Normal",
            image: "https://i.postimg.cc/FHL4mPpv/image.png",
        },
        {
            name: "audia4vw",
            description: "Blindaje a puertas cerradas + 10 TN de peso",
            image: "https://i.postimg.cc/qv3T0mwT/image.png",
        },
        {
            name: "evo9",
            description: "Addon Normal",
            image: "https://i.postimg.cc/02vWrVPF/image.png",
        },
        {
            name: "m5e60",
            description: "Addon Normal",
            image: "https://i.postimg.cc/m2NH2wgm/image.png",
        },
        {
            name: "cce60limit",
            description: "Addon Normal",
            image: "https://i.postimg.cc/4Nb9N5xP/image.png",
        },
        {
            name: "gtrpit",
            description: "Addon Normal + Full peso (100 Toneladas)",
            image: "https://i.postimg.cc/ncYDckh6/image.png",
        },
        {
            name: "Ikrownrcf",
            description: "Ruedas Blindadas",
            image: "https://i.postimg.cc/Hs4ys2LG/image.png",
        },
        {
            name: "GODzEVOMR",
            description: "Addon Normal",
            image: "https://i.postimg.cc/KjjHvzn3/image.png",
        },
        {
            name: "mansgtr50",
            description: "Addon Normal",
            image: "https://i.postimg.cc/2yyK864x/image.png",
        },
        {
            name: "ToraUSkyline",
            description: "Addon Normal",
            image: "https://i.postimg.cc/DzYkKyyb/image.png",
        },
        {
            name: "992targa4s50",
            description: "Addon Normal + 10 Tn de Peso",
            image: "https://i.postimg.cc/VvvVL6jR/image.png",
        },
        {
            name: "PlacoRRculillan",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/J0K4ZC5d/image.png",
        },
        {
            name: "fbatourc",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/4dN0nCns/image.png",
        },
        {
            name: "toyotaGR2025",
            description: "Addon Normal",
            image: "https://i.postimg.cc/VvvVL6jR/image.png",
        },
        {
            name: "204sculli",
            description: "Addon Normal",
            image: "https://i.postimg.cc/pX656KK1/image.png",
        },
        {
            name: "bmwx7khann",
            description: "Addon Normal + 30 Tn de peso",
            image: "https://i.postimg.cc/XJBnXyrY/image.png",
        },
        {
            name: "ToraCullinanWB",
            description: "Addon Normal",
            image: "https://i.postimg.cc/NF4N8pnW/screenshot-9.png",
        },
        {
            name: "530d",
            description: "Blindaje a puertas cerradas + 100 Tn de peso",
            image: "https://i.postimg.cc/L8npX1YD/screenshot-11.png",
        },
        {
            name: "rrsupramk3",
            description: "Addon Normal",
            image: "https://i.postimg.cc/HsvqfkZJ/screenshot-12.png",
        },
        {
            name: "AlfaGiuliaGTAM23",
            description: "Addon Normal + Full peso (100 toneladas)",
            image: "https://i.postimg.cc/rsmhJSLm/screenshot-13.png",
        },
        {
            name: "nissanr33tbk",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/4dFvXqr9/screenshot-14.png",
        },
        {
            name: "hycfocusrs",
            description: "Addon Normal",
            image: "https://i.postimg.cc/sX1SHKvx/screenshot-15.png",
        },
        {
            name: "dicyxxs90gte",
            description: "Addon Normal",
            image: "https://i.postimg.cc/Y9jNGGyz/screenshot-18.png",
        },
        {
            name: "m5csao22",
            description: "Addon normal + 10 Toneladas de peso",
            image: "https://i.postimg.cc/KYpB2cvv/screenshot-19.png",
        },
        {
            name: "addonurue36",
            description: "Addon Normal",
            image: "https://i.postimg.cc/htp7L4mb/screenshot-20.png",
        },
        {
            name: "GODzTCPMRX7FD",
            description: "Blindaje a puertas cerradas + Full peso (100 Toneladas)",
            image: "https://i.postimg.cc/bJWz8WtS/screenshot-21.png",
        },
        {
            name: "ikx3mini21",
            description: "Addon Normal",
            image: "https://i.postimg.cc/FsfLyXZ6/screenshot-22.png",
        },
        {
            name: "mythicalcoqd1",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/yYSDJX6q/screenshot-23.png",
        },
        {
            name: "datsunny",
            description: "Addon Normal",
            image: "https://i.postimg.cc/c4YQqNnR/screenshot-24.png",
        },
        {
            name: "celestem5",
            description: "Addon Normal",
            image: "https://i.postimg.cc/qB6Kndj4/screenshot-25.png",
        },
        {
            name: "donrrss",
            description: "Addon Normal",
            image: "https://i.postimg.cc/jdrD7nDH/screenshot-27.png",
        },
        {
            name: "golf4",
            description: "Addon Normal",
            image: "https://i.postimg.cc/d3cVrgt5/screenshot-28.png",
        },
        {
            name: "glx",
            description: "Addon Normal",
            image: "https://i.postimg.cc/pLw4Wv01/screenshot-30.png",
        },
        {
            name: "yFeF12T",
            description: "Addon Normal",
            image: "https://i.postimg.cc/RZ5Lq0Bt/screenshot-31.png",
        },
        {
            name: "m2f22",
            description: "Addon Normal + 15 Tonelas de peso",
            image: "https://i.postimg.cc/bvYCNvxW/screenshot-32.png",
        },
        {
            name: "vc_m3g80custom",
            description: "Addon Normal",
            image: "https://i.postimg.cc/TYrCVbC6/screenshot-33.png",
        },
        {
            name: "elegyr",
            description: "Addon Normal",
            image: "https://i.postimg.cc/Jn69Wk9V/screenshot-37.png",
        },
        {
            name: "mmc20",
            description: "Addon Normal",
            image: "https://i.postimg.cc/85xg6vwh/screenshot-38.png",
        },
        {
            name: "priortaycan",
            description: "Addon Normal",
            image: "https://i.postimg.cc/XJRtJb78/screenshot-39.png",
        },
        {
            name: "agtr35",
            description: "Addon Normal + 50 Toneladas de Peso",
            image: "https://i.postimg.cc/dtmgqgMq/screenshot-40.png",
        },
        {
            name: "r36ab",
            description: "Addon Normal + Full Peso (100 Toneladas)",
            image: "https://i.postimg.cc/nhSRrJ3t/screenshot-41.png",
        },
        {
            name: "mxpan",
            description: "Addon Normal + 10 Toneladas de peso",
            image: "https://i.postimg.cc/zDwxWWdZ/screenshot-42.png",
        },
        {
            name: "r36ab",
            description: "Addon Normal + Full Peso (100 Toneladas)",
            image: "https://i.postimg.cc/nhSRrJ3t/screenshot-41.png",
        },
        {
            name: "404fluence",
            description: "Blindaje a puerta abierta + Full peso (100 Toneladas)",
            image: "https://i.postimg.cc/gJmZPw3Z/screenshot-44.png",
        },
        {
            name: "fd599",
            description: "Addon Normal",
            image: "https://i.postimg.cc/63qBRtXn/screenshot-45.png",
        },
        {
            name: "R81MSS",
            description: "Addon normal con Luces activables",
            image: "https://i.postimg.cc/g24J6MhF/screenshot-47.png",
        }
    ],

    camionetas: [
        {
            name: "Fortuner",
            description: "Addon Normal",
            image: "https://i.postimg.cc/QdFsHYdC/image.png",
        },
        {
            name: "overfinchsvr",
            description: "Addon Normal que posee texturas bugueadas, que se arreglan en el mecanico + Full peso (100 toneladas)",
            image: "https://i.postimg.cc/rwxnn5h4/image.png",
        },
        {
            name: "DBmattrackh1",
            description: "Addon Normal",
            image: "https://i.postimg.cc/hGFjgRb0/image.png",
        },
        {
            name: "trhawk",
            description: "Addon Normal",
            image: "https://i.postimg.cc/JhNM3DVn/image.png",
        },
        {
            name: "bronco2021",
            description: "Addon Normal",
            image: "https://i.postimg.cc/W1t7JgZ1/image.png",
        },
        {
            name: "dbRedeyeTracky",
            description: "Blindaje a puertas cerradas + 60 Tn de Peso",
            image: "https://i.postimg.cc/KYMr0bJ1/image.png",
        },
        {
            name: "captiva2010",
            description: "Addon Normal",
            image: "https://i.postimg.cc/FHL4mPpv/image.png",
        },
        {
            name: "addonmanu",
            description: "Addon Normal",
            image: "https://i.postimg.cc/yYKQWLs2/image.png",
        },
        {
            name: "fbrrham",
            description: "Addon Normal",
            image: "https://i.postimg.cc/fy1Mj1CH/image.png",
        },
        {
            name: "GODz22LIGHTNINGLFTD",
            description: "Addon Normal",
            image: "https://i.postimg.cc/DfNfTbhT/image.png",
        },
        {
            name: "4x4glc63",
            description: "Blindaje a puertas cerradas + Infinidad de calcomanias",
            image: "https://i.postimg.cc/gj1Gq1s7/image.png",
        },
        {
            name: "gcmf150svt2002",
            description: "Addon Normal + 60 Tn de Peso",
            image: "https://i.postimg.cc/WpypvJVd/image.png",
        },
        {
            name: "21rav4",
            description: "Blinaje a puerta cerrada",
            image: "https://i.postimg.cc/9XkXhq24/image.png",
        },
        {
            name: "ikx3urus23",
            description: "Addon Normal",
            image: "https://i.postimg.cc/CM2Mgf05/image.png",
        },
        {
            name: "sly4x4trackhawk",
            description: "Addon Normal",
            image: "https://i.postimg.cc/Pf7fj8Hw/image.png",
        },
        {
            name: "Domyah_TiffanyRange",
            description: "Blindaje a puerta cerrada",
            image: "https://i.postimg.cc/ncv18Rhf/image.png",
        },
        {
            name: "1320rubi",
            description: "Addon Normal",
            image: "https://i.postimg.cc/mZKdW13g/image.png",
        },
        {
            name: "G5502019",
            description: "Blindaje a puertas cerrada con picks traseros + 60 TN de peso",
            image: "https://i.postimg.cc/FFYP6VSm/image.png",
        },
        {
            name: "rrf150w",
            description: "Addon Normal",
            image: "https://i.postimg.cc/MH11SHxQ/image.png",
        },
        {
            name: "GC_WBSUBN",
            description: "Addon Normal",
            image: "https://i.postimg.cc/2yg9HVGr/image.png",
        },
        {
            name: "GODzJW",
            description: "Addon Normal",
            image: "https://i.postimg.cc/s228gdMS/image.png",
        },
        {
            name: "trx",
            description: "Blindaje a puertas cerradas + Full peso (100 Toneladas)",
            image: "https://i.postimg.cc/MH11SHxQ/image.png",
        },
        {
            name: "gronos",
            description: "Addon Normal",
            image: "https://i.postimg.cc/RFdNQtM8/image.png",
        },
        {
            name: "rubcamper",
            description: "Addon Normal",
            image: "https://i.postimg.cc/cHR5DsjP/image.png",
        },
        {
            name: "BCS_Silverado",
            description: "Blindaje a puertas cerradas con picks",
            image: "https://i.postimg.cc/CKHjXzhH/image.png",
        },
        {
            name: "al18",
            description: "Blindaje a puertas cerradas",
            image: "https://i.postimg.cc/DzJz4NDh/screenshot-3.png",
        },
        {
            name: "ikx3rezvani",
            description: "Full blindaje a puertas cerradas",
            image: "https://i.postimg.cc/zDjqv5BC/screenshot-4.png",
        },
        {
            name: "fordrangerpayaso",
            description: "Blindaje a puerta abierta",
            image: "https://i.postimg.cc/FskmZSpg/screenshot-5.png",
        },
        {
            name: "GODzDRIFTHAWKWB",
            description: "Ruedas Blindadas + 50 Toneladas de peso",
            image: "https://i.postimg.cc/5NW1s0RT/screenshot-7.png",
        },
        {
            name: "GODz22LIGHTNINGWB",
            description: "Addon Normal",
            image: "https://i.postimg.cc/44VRHGxV/screenshot-8.png",
        },
        {
            name: "mercedesgls",
            description: "Blindaje a puerta cerrada con picks",
            image: "https://i.postimg.cc/wMP8DmVm/screenshot-36.png",
        },
        {
            name: "bmwe70",
            description: "Addon Normal",
            image: "https://i.postimg.cc/5yfqp7sk/screenshot-43.png",
        },
        {
            name: "x6c",
            description: "Addon Normal",
            image: "https://i.postimg.cc/j5DLTzLP/screenshot-46.png",
        },
        {
            name: "KillerHwak",
            description: "Addon normal + 10 Toneladas de peso",
            image: "https://i.postimg.cc/4x3GjXKx/screenshot-48.png",
        }
    ],

    motos: [],

    aereos: [],

    otros: []
};

function showCategory(cat) {

    // actualizar botones
    document.querySelectorAll(".categories button").forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.toLowerCase() === cat.toLowerCase()) {
            btn.classList.add("active");
        }
    });

    const container = document.getElementById("vehicle-container");
    container.innerHTML = "";

    vehicles[cat].forEach(v => {
        const card = `
        <div class="vehicle-card">
            <img src="${v.image}" alt="${v.name}">
            <h3>${v.name}</h3>
            <p>${v.description}</p>
        </div>`;
        container.innerHTML += card;
    });
}

showCategory("autos");
