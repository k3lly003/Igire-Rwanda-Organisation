import { IBM_Plex_Sans } from 'next/font/google';

const imb_plet = IBM_Plex_Sans({
    subsets: [ 'greek' ],
    variable: '--font-ibm-plex-sans',
    weight: ['100', '200', '400', '600'],
    style: ['normal' ],
})

export const imb = imb_plet.variable;