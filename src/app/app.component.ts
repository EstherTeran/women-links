import { Component } from '@angular/core';
// declare var $
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'My First Angular App! Anaflavia y Yuli';
  // nuevo = '...';
  public dataOrgs: any[] = [
    {
      name: 'DEMUS, Estudio para la Defensa de los Derechos de la Mujer',
      type: 'Estudio de abogados',
      country: ['Perú'],
      tags: ['derecho', 'sexualidad'],
      description: 'Organización feminista peruana que defiende los derechos humanos, en particular los derechos sexuales y reproductivos de las mujeres, promoviendo su libre ejercicio y cuestionando el paradigma cultural hegemónico sobre las mujeres y su sexualidad.',
      socialnetworks: [{ facebook: 'https://www.facebook.com/DemusPeru/?ref=br_rs' }],
      website: 'https://www.demus.org.pe',
      address: 'Jirón Caracas 2624 Jesús María, Lima - Perú',
      image: 'https://user-images.githubusercontent.com/39272944/55281478-011a0300-5303-11e9-8217-f04bd8bb355c.png',
      members: [
      ],
    },
    {
      name: 'Movimiento Manuela Ramos',
      type: 'ONG',
      country: ['Perú'],
      tags: ['derecho', 'empoderamiento femenino', 'comunidades indígenas', 'comunidades amazónicas'],
      description: `Brinda empodera a mujeres indígenas de la amazonía para que tengan mayor participación en las deciciones de sus comunidades`,
      socialnetworks: [{ facebook: 'https://www.facebook.com/pg/manuela.peru/' }],
      website: 'http://fondationforge.org/tag/peru/',
      address: ' Jr. Antonio Miroquesada 327 Lima, Perú.',
      image: 'https://user-images.githubusercontent.com/39272944/55281481-01b29980-5303-11e9-9f74-81124fb83960.png',
      members: [
      ],
    },
    {
      name: 'Mujer peruana',
      type: 'ONG',
      country: ['Perú'],
      tags: ['educacion', 'becas'],
      description: `Organización que tiene como fin promover el desarrollo integral de la mujer peruana, procurando que ésta alcance una vida más digna en una sociedad más justa y equitativa, mediante capacitaciones de alto nivel empresarial.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/OngMujerPeruana/' }
      ],
      website: '',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281476-00816c80-5303-11e9-9efb-45ed69e9bad7.png',
      members: [
      ],
    },
    {
      name: 'Red Nacional de Promoción de la Mujer ',
      type: 'Asociación',
      country: ['Perú'],
      tags: ['educacion', 'becas'],
      description: `Somos una asociación sin fines de lucro que agrupa a 700 miembros entre personas y organizaciones del todo el Perú, comprometidas con la promoción y defensa de los derechos de las mujeres y la mejora de su posición y condición, en un marco de desarrollo sostenible.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/redmujerRNPM/' }
      ],
      website: 'https://www.rnpm.org.pe/',
      address: 'Av. 6 de agosto 759. Jesus Maria',
      image: 'https://user-images.githubusercontent.com/39272944/55281473-ffe8d600-5302-11e9-8586-ed93150d2761.png',
      members: [
      ],
    },
    {
      name: 'Más mujeres en UX',
      type: 'Comunidad',
      country: ['Perú', 'Argentina', 'Chile'],
      tags: ['tecnología', 'emprendimiento', 'desarrollo profesional'],
      description: `Comunidad sin fines de lucro que promueve el aprendizaje, redes de contacto y visibilización de las mujeres dentro de la industria UX y disciplinas afines`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/pg/masmujeresux' }
      ],
      website: 'http://masmujeresux.com/',
      address: '',
      image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/37132276_199807154025862_1957931326589894656_n.png?_nc_cat=103&_nc_ht=scontent-scl1-1.xx&oh=b66c7f71e736317e245bf4ad505ea0e2&oe=5D411583',
      members: [
        {
          name: 'Cinthy Revilla',
          photo: 'http://masmujeresux.pe/public/assets/img/team/perfilCinthy.jpg',
          linkeding: 'https://www.linkedin.com/in/sheila-acu%C3%B1a-obreg%C3%B3n/',
        },
        {
          name: 'Sheila Acuña',
          photo: 'http://masmujeresux.pe/public/assets/img/team/perfilSheila.jpg',
          linkeding: 'https://www.linkedin.com/in/cinthyrevilla/',
        },
        {
          name: 'Sara Castillo',
          photo: 'http://masmujeresux.pe/public/assets/img/team/perfilSaris.jpg',
          linkeding: 'https://www.linkedin.com/in/saracastillojuarez/',
        },
  
      ],
    },
    {
      name: 'María Landó',
      type: 'Comunidad',
      country: ['Perú'],
      tags: ['arte', 'música', 'desarrollo profesional'],
      description: `Somos María Landó, una plataforma feminista que nace de la necesidad de visibilizar el trabajo que realizan las mujeres del sector musical peruano.`,
      socialnetworks: [
        { facebook: 'www.facebook.com/pg/marialandoperu' }
      ],
      website: '',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281470-ffe8d600-5302-11e9-85dc-da733275ba41.png',
      members: [
      ],
    },
    {
      name: 'WiT Perú',
      type: 'Comunidad',
      country: ['Perú'],
      tags: ['arte', 'música', 'desarrollo profesional'],
      description: `Somos una organización que busca compartir conocimiento de forma voluntaria y sin fines de lucro. Donamos nuestro tiempo, nuestra energía y nuestra pasión para realizar actividades que influyan positivamente en otras mujeres, brindándoles una plataforma y un ambiente propicio para su desarrollo personal y profesional.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/pg/witperu' }
      ],
      website: 'http://www.witperu.org/',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281474-00816c80-5303-11e9-8c20-0542afb3389b.png',
      members: [
      ],
    },
    {
      name: 'FENMUCARINAP',
      type: 'Federación',
      country: ['Perú'],
      tags: ['agricultura', 'artesanía', 'comunidades indígenas'],
      description: `La Federación Nacional de Mujeres Campesinas, Artesanas, Indígenas, Nativas y Asalariadas del Perú (FENMUCARINAP) tiene como misión organizar, representar a las mujeres de las áreas rurales de todas las regiones del Perú, que apoya, orienta y capacita a sus integrantes a fin de contribuir a su empoderamiento y protagonismo social, económico, político y cultural, en la lucha por un progreso para todas y todos, entendido como Buen Vivir, con justicia, equidad y armonía con la naturaleza.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/pg/fenmucarinap' }
      ],
      website: 'http://bdpi.cultura.gob.pe/node/100',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281479-011a0300-5303-11e9-85d3-ada5deadf4e6.png',
      members: [
      ],
    },
    {
      name: 'Laboratoria',
      type: 'Emprendimiento Social',
      country: ['Perú', 'México', 'Lima', 'Chile'],
      tags: ['Educación', 'tecnología', 'desarrollo profesional', 'aprendizaje'],
      description: `Trabajamos para que miles de mujeres en América Latina desarrollen carreras en tecnología que cambien su futuro y hagan más diversa a la industria. A través de nuestro Bootcamp mujeres que no tuvieron acceso a una educación de calidad, se convierten en Desarrolladoras Web y Diseñadoras de Experiencia de Usuario, accediendo a transformadores trabajos en tecnología.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/laboratoriala/' }
      ],
      website: 'https://www.laboratoria.la/',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281480-011a0300-5303-11e9-9059-50b843a4981f.png',
      members: [
      ],
    },
    {
      name: 'Corporación mundial de la mujer Colomnbia',
      type: 'Corporación sin fines de lucro',
      country: ['Colombia'],
      tags: ['Educación', 'emprendimiento', 'desarrollo profesional', 'aprendizaje'],
      description: `Somos una entidad sin ánimo de lucro que busca promover el desarrollo de la mujer a través del fomento del emprendimiento, el fortalecimiento empresarial y el impulso de la empleabilidad`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/cmmcolombia/' }
      ],
      website: 'https://www.cmmcolombia.org',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281477-011a0300-5303-11e9-9fb1-cea23b2e6292.png',
      members: [
      ],
    },
    {
      name: 'Fundación WWB Colombia',
      type: 'Fundación',
      country: ['Colombia'],
      tags: ['Educación', 'emprendimiento', 'desarrollo profesional', 'aprendizaje'],
      description: `Impulsar procesos de empoderamiento de emprendedoras de escasos recursos en Colombia, para contribuir a su transformación en mujeres autónomas y capaces de tomar las decisiones adecuadas para construir un proyecto de vida digno y mejorar su nivel socioeconómico y el de sus familias.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/FundacionWWBCol' }
      ],
      website: 'https://www.fundacionwwbcolombia.org',
      address: 'Av 5N No. 16-78',
      image: 'https://user-images.githubusercontent.com/39272944/55281475-00816c80-5303-11e9-84b9-e55d4ff066ee.png',
      members: [
      ],
    },
    {
      name: 'ONU Mujeres',
      type: 'Organización',
      country: ['Colombia', 'Brazil', 'Chile', 'Perú', 'Guatemala', 'Guyana', 'El Salvador', 'Perú', 'Trinidad y Tobago', 'Uruguay'],
      tags: ['Educación', 'emprendimiento', 'desarrollo profesional', 'derechos'],
      description: `ONU Mujeres es la organización de las Naciones Unidas dedicada a promover la igualdad de género y el empoderamiento de las mujeres. Como defensora mundial de mujeres y niñas, ONU Mujeres fue establecida para acelerar el progreso que conllevará a mejorar las condiciones de vida de las mujeres y para responder a las necesidades que enfrentan en el mundo.`,
      socialnetworks: [
        { facebook: 'https://www.facebook.com/onumujeres' }
      ],
      website: 'http://www.unwomen.org',
      address: '',
      image: 'https://user-images.githubusercontent.com/39272944/55281472-ffe8d600-5302-11e9-9f15-2dfc2934968a.png',
      members: [
      ],
    },
  ]
 

}

// https://stackblitz.com/angular/xkxkdjbqaol?file=src%2Fapp%2Fhero-search%2Fhero-search.component.ts
