import { Theme } from "assets/theme/theme"

export const mapColor = (subject: string) => {
  switch (subject) {
    case 'Mat': 
      return Theme.Subjects.mat;
    case 'Qui': 
      return Theme.Subjects.qui;
    case 'His': 
      return Theme.Subjects.hist;
    case 'Geo': 
      return Theme.Subjects.geo;
    case 'Bio': 
      return Theme.Subjects.bio;
    case 'Por': 
      return Theme.Subjects.por;
    case 'Phys': 
      return Theme.Subjects.phys;
    case 'Phyl': 
      return Theme.Subjects.phil;
    case 'Att': 
      return Theme.Subjects.att;
    default: 
      return Theme.Subjects.att;
  } 
}

export const mapSubject = (subject: string) => {
  switch (subject) {
    case 'Mat': 
      return 'Matemática';
    case 'Qui': 
      return 'Química';
    case 'His': 
      return 'História';
    case 'Geo': 
      return 'Geografia';
    case 'Bio': 
      return 'Biologia';
    case 'Por': 
      return 'Português';
    case 'Phys': 
      return 'Física';
    case 'Phyl': 
      return 'Filosofia';
    case 'Att': 
      return 'Atualidades';
    default: 
      return subject;
  } 
}
