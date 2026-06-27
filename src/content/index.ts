export interface ContentSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  variant?: 'default' | 'highlight' | 'legal'
  legalRef?: string
}

export interface ParticipateOption {
  id: 'accionante' | 'firmas'
  title: string
  description: string
  steps: string[]
  pdfPath: string
  pdfLabel: string
  legalNote?: string
}

export const hero = {
  title: 'Empleo digno para personas trans en Bogotá',
  subtitle:
    'El Distrito prometió contratar más personas trans en sus entidades públicas. Hoy no está cumpliendo esa meta. Esta acción popular — impulsada por el Consejo Consultivo LGBTI y CULTIVA — busca que cumplan.',
}

export const sections: ContentSection[] = [
  {
    id: 'why-it-matters',
    title: '¿Por qué importa?',
    variant: 'highlight',
    paragraphs: [
      'Contratar personas trans en el sector público no es un favor: es cumplir una promesa del Plan de Desarrollo de Bogotá y garantizar que quienes enfrentan más barreras para conseguir empleo puedan acceder en igualdad de condiciones.',
      'Cuando el Estado contrata de forma inclusiva, envía un mensaje claro: las personas trans tienen derecho a trabajar con dignidad.',
    ],
  },
  {
    id: 'what-is-action',
    title: '¿Qué es una acción popular?',
    paragraphs: [
      'Es una herramienta que cualquier ciudadano puede usar para pedirle a un juez que una entidad pública cumpla con algo que afecta a toda la comunidad — no solo a una persona.',
      'En este caso, buscamos que el Distrito cumpla la Meta Estratégica 84 de su Plan de Desarrollo, relacionada con la vinculación laboral de personas trans.',
    ],
  },
  {
    id: 'goal',
    title: '¿Qué buscamos? (Meta 84)',
    paragraphs: [
      'Bogotá se comprometió a pasar de 364 a 546 personas LGBTI (incluidas trans) vinculadas en entidades distritales durante la vigencia del Plan de Desarrollo "Bogotá Camina Segura 2024-2027".',
    ],
    bullets: [
      'Empleos de libre nombramiento y remoción',
      'Empleos en provisionalidad',
      'Trabajadores oficiales',
      'Contratistas',
    ],
    legalRef:
      'Marco legal: Acuerdo 927 de 2024 (Plan de Desarrollo Distrital), Meta Estratégica 84, y Directiva 005 de 2021 de la Alcaldía Mayor de Bogotá.',
  },
  {
    id: 'targets',
    title: '¿Contra quién puede ir?',
    paragraphs: ['Esta acción popular puede presentarse contra:'],
    bullets: [
      'Entidades públicas del Distrito',
      'Empresas del Estado',
      'Personas particulares cuando sus actuaciones afecten derechos colectivos',
    ],
  },
  {
    id: 'judge-powers',
    title: '¿Qué puede ordenar un juez?',
    paragraphs: [
      'Si encuentra probada la vulneración, el juez puede ordenar, entre otras medidas:',
    ],
    bullets: [
      'Suspender una actuación ilegal',
      'Implementar una política pública o un plan de acción',
      'Ejecutar obras o acciones correctivas',
      'Modificar procedimientos administrativos',
      'Adoptar medidas de prevención',
      'Hacer seguimiento al cumplimiento de la sentencia',
    ],
  },
  {
    id: 'beneficiaries',
    title: '¿Quién se beneficia?',
    paragraphs: [
      'El beneficio de esta acción popular no es para una sola persona.',
      'Su propósito es garantizar que quienes enfrentan mayores barreras para acceder al empleo público — como las personas trans — puedan acceder en condiciones de igualdad a las oportunidades laborales que el Distrito se comprometió a promover.',
    ],
  },
]

export const participateIntro =
  'Hay dos formas de sumarte a esta iniciativa. Elige la que corresponda a tu situación:'

export const participateOptions: ParticipateOption[] = [
  {
    id: 'accionante',
    title: 'Ser accionante',
    description:
      'Si quieres vincularte formalmente a la acción como demandante, completa el formato de accionantes.',
    steps: [
      'Descarga el formato de accionantes (PDF)',
      'Complétalo con tus datos',
      'Adjunta copia de tu cédula de ciudadanía',
      'Envíalo al contacto que publicaremos pronto',
      'El equipo se comunicará contigo para confirmar y orientarte',
    ],
    pdfPath: 'documentos/Formato_Accionantes_v3.pdf',
    pdfLabel: 'Descargar formato de accionantes',
    legalNote:
      'Al ser accionante debes adjuntar copia de tu cédula. El equipo se contactará contigo para confirmar tu participación.',
  },
  {
    id: 'firmas',
    title: 'Firmar en apoyo',
    description:
      'Si quieres respaldar la acción sin ser accionante, descarga y firma la planilla de apoyo.',
    steps: [
      'Descarga la planilla de firmas (PDF)',
      'Imprímela o complétala digitalmente',
      'Firma y, si puedes, recolecta más firmas de apoyo',
      'Devuélvela al contacto que publicaremos pronto',
    ],
    pdfPath: 'documentos/Planilla_Firmas_Accion_Popular_Meta84_Trans_vfinal.pdf',
    pdfLabel: 'Descargar planilla de firmas',
  },
]

export const contactPlaceholder = {
  title: 'Contacto',
  message:
    'Pronto publicaremos el correo y WhatsApp para enviar los documentos completados.',
}
