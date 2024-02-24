import {
  Noto_Sans,
  Josefin_Sans,
  Nunito_Sans,
  PT_Sans,
  Lusitana,
} from 'next/font/google';

export const notinoSans = Nunito_Sans({
  weight: '300',
  subsets: ['latin-ext'],
});
export const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });

export const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });
