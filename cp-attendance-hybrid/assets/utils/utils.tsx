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
    case 'MT': 
      return 'Matemática';
    case 'Qui': 
      return 'Química';
    case 'CH': 
      return 'Química';
    case 'His': 
      return 'História';
    case 'HI': 
      return 'História';
    case 'Geo': 
      return 'Geografia';
    case 'GE': 
      return 'Geografia';
    case 'Bio': 
      return 'Biologia';
    case 'BI': 
      return 'Biologia';
    case 'Por': 
      return 'Português';
    case 'PT': 
      return 'Português';
    case 'Phys': 
      return 'Física';
    case 'PH': 
      return 'Física';
    case 'Phyl': 
      return 'Filosofia';
    case 'PL': 
      return 'Filosofia';
    case 'Att': 
      return 'Atualidades';
    case 'CA': 
      return 'Atualidades';
    default: 
      return subject;
  } 
}
