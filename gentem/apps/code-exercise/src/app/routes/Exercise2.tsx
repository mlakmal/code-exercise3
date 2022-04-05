import { MultiSelect } from '@gentem/ux';
import { FormLabel } from '@mui/material';

const OPTIONS = [
  { label: 'The Shawshank Redemption', value: 1994 },
  { label: 'The Godfather', value: 1972 },
  { label: 'The Godfather: Part II', value: 1974 },
  { label: 'The Dark Knight', value: 2008 },
  { label: '12 Angry Men', value: 1957 },
  { label: "Schindler's List", value: 1993 },
  { label: 'Pulp Fiction', value: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    value: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', value: 1966 },
  { label: 'Fight Club', value: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    value: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    value: 1980,
  },
  { label: 'Forrest Gump', value: 1994 },
  { label: 'Inception', value: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    value: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", value: 1975 },
  { label: 'Goodfellas', value: 1990 },
  { label: 'The Matrix', value: 1999 },
  { label: 'Seven Samurai', value: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    value: 1977,
  },
  { label: 'City of God', value: 2002 },
  { label: 'Se7en', value: 1995 },
  { label: 'The Silence of the Lambs', value: 1991 },
  { label: "It's a Wonderful Life", value: 1946 },
  { label: 'Life Is Beautiful', value: 1997 },
  { label: 'The Usual Suspects', value: 1995 },
  { label: 'Léon: The Professional', value: 1994 },
  { label: 'Spirited Away', value: 2001 },
  { label: 'Saving Private Ryan', value: 1998 },
  { label: 'Once Upon a Time in the West', value: 1968 },
  { label: 'American History X', value: 1998 },
  { label: 'Interstellar', value: 2014 },
];

export function Exercise2() {
  return (
    <>
    <p>Limit the tags to the width of dropdown width. and include additional tag count not visible with +X</p>
    <FormLabel>
      <MultiSelect
        options={OPTIONS}
        placeholder="Select Movies"
        style={{ width: 500 }}
      />
    </FormLabel></>
  );
}
