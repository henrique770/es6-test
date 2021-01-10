const course_modules = {
  '1': {
    module_id: '1',
    module_title: 'Módulo 1',
    module_desc: 'O que não é influência\n\nPoder pra valer\n\nAmor de verdade',
    module_classes: ['Poder não é influência'],
  },
  '2': {
    module_id: '2',
    module_title: 'Módulo 2',
    module_desc: 'Agora vamos pro detalhe',
    module_classes: ['Agora vai o negócio', 'Aula mágica com magos mágicos'],
  },
};

const modules = Object.values(course_modules);

console.log(
  Object.values(modules).map(function (item) {
    return item.module_title;
  })
);

let user = {
  courses: {
    first: 'madam',
    second: 'ryu',
  },
};

console.log(Object.values(user));
