import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public post = {};
  public updates = {};
  public date : any;

  constructor() { }

  writeUserData(user, name) {
    return new Promise((resolve) => {
      firebase
        .database()
        .ref('users/' + user.uid).set({
          username: name,
          email: user.email,
          photo: user.photoURL ||'https://previews.123rf.com/images/kannaa123rf/kannaa123rf1609/kannaa123rf160900065/66702728-cara-de-ni%C3%B1a-cabeza-de-perfil-avatar-femenina-ilustraci%C3%B3n-del-vector-para-el-dise%C3%B1o-de-la-belleza-icono-plana.jpg'
        });
      resolve(true);
    });
  }
  writeComunities() {
    return new Promise((resolve) => {
      firebase
        .database()
        .ref('comunities/').set(
          [
            {
              name: 'DEMUS, Estudio para la Defensa de los Derechos de la Mujer',
              type: 'Estudio de abogados',
              country: ['Perú'],
              tags: ['derecho', 'sexualidad'],
              description: 'Organización feminista peruana que defiende los derechos humanos, en particular los derechos sexuales y reproductivos de las mujeres, promoviendo su libre ejercicio y cuestionando el paradigma cultural hegemónico sobre las mujeres y su sexualidad.',
              socialnetworks: [{ facebook: 'https://www.facebook.com/DemusPeru/?ref=br_rs' }],
              website: 'https://www.demus.org.pe',
              address: 'Jirón Caracas 2624 Jesús María, Lima - Perú',
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/41205919_2478608128830886_4911848685605748736_n.png?_nc_cat=105&_nc_ht=scontent-scl1-1.xx&oh=321606fe53c612d060735fd6438a3287&oe=5D0AF1EE',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/43146199_2511946982179281_2607833489919180800_n.png?_nc_cat=104&_nc_ht=scontent-scl1-1.xx&oh=47adf35b74c062caae5a3c7e6ed5a393&oe=5D0DA363',
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
              image: 'https://scontent.flim16-3.fna.fbcdn.net/v/t1.0-9/55760056_2191108847602056_3554574887618084864_o.jpg?_nc_cat=104&_nc_ht=scontent.flim16-3.fna&oh=c3a552c7ecc0cddc623e321002da8dac&oe=5D3DDE1A',
              members: [
              ],
            },
            {
              name: 'Fundación Forge',
              type: 'Fundación',
              country: ['Perú'],
              tags: ['educacion', 'becas'],
              description: `Facilitar una inserción laboral de calidad a jóvenes pertenecientes a familias de bajos recursos económicos, a través de un sistema innovador de formación y empleo.`,
              socialnetworks: [
                { facebook: 'https://www.facebook.com/fundacionforgeperu/' }
              ],
              website: 'http://fondationforge.org/tag/peru/',
              address: 'Av. Arequipa 3353, San Isidro 15046',
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/12043068_1047243418649526_4564659655414504258_n.jpg?_nc_cat=101&_nc_ht=scontent-scl1-1.xx&oh=915e279f11d116c1fceb71ca721ff515&oe=5D3F87E6',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/19554351_1444431352315443_7560110311139007871_n.jpg?_nc_cat=109&_nc_ht=scontent-scl1-1.xx&oh=225989606e49373eb743f6d3eba33ecb&oe=5D3D3749',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/28870222_592371871109016_610502218805212876_n.png?_nc_cat=101&_nc_ht=scontent-scl1-1.xx&oh=6982d2ae35307797c4238c40bdf3b187&oe=5D1371E0',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/36265018_897278357126688_5569359190226370560_n.png?_nc_cat=108&_nc_ht=scontent-scl1-1.xx&oh=d8d4bb79edf9af7e15b604c9ed76479e&oe=5D3F5F8B',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/21730871_1490483204373981_3783250819449511932_n.png?_nc_cat=102&_nc_ht=scontent-scl1-1.xx&oh=151bfcaba2efcae544fb78134360a498&oe=5D116129',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/29598069_923498544491220_7607067312275824752_n.jpg?_nc_cat=1&_nc_ht=scontent-scl1-1.xx&oh=20a047c6f247808e9526082ade7657ce&oe=5D43F93D',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/11707612_1102654253082533_339853324240622397_n.png?_nc_cat=102&_nc_ht=scontent-scl1-1.xx&oh=1b4da0186c83d3e646fef2b49571ae01&oe=5D4B15C5',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/10665738_916511505029990_6856952137127120670_n.png?_nc_cat=103&_nc_ht=scontent-scl1-1.xx&oh=1d311522a90a64ff81b9245bb2bcad78&oe=5D3E244B',
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
              image: 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/12359898_1096177313728130_8345971031766138643_n.png?_nc_cat=101&_nc_ht=scontent-scl1-1.xx&oh=17172e3628d351db9289e63d208e6ccf&oe=5D034A98',
              members: [
              ],
            },
          ]
      );
      resolve(true);
    });
  }
  writePostData(description, privacity, img) {
    this.date = firebase.database.ServerValue.TIMESTAMP;
    return new Promise((resolve) => {
      const _user = firebase.auth().currentUser;
      firebase
      .database()
      .ref('/users/' + _user.uid)
      .once('value', (snapshot) => {
        firebase
          .database()
          .ref('posts')
          .push()
          .set({
            img: img || null,
            description: description || '',
            privacity: privacity,
            date: this.date,
            authorName: snapshot.val().username,
            authorPhoto: snapshot.val().photo || 'no hay',
            authorId: _user.uid,
            likesCount: 0
         });
        resolve(true);
      })
    });
  }
}
