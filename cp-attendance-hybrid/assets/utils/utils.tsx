import { Theme } from "assets/theme/theme"

export const mapColor = (subject: string) => {
  switch (subject) {
    case 'MT': 
      return Theme.Subjects.mat;
    case 'CH': 
      return Theme.Subjects.qui;
    case 'HI': 
      return Theme.Subjects.hist;
    case 'GE': 
      return Theme.Subjects.geo;
    case 'BI': 
      return Theme.Subjects.bio;
    case 'PT': 
      return Theme.Subjects.por;
    case 'PH': 
      return Theme.Subjects.phys;
    case 'PL': 
      return Theme.Subjects.phil;
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
