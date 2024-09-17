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
