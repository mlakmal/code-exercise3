import {
  Autocomplete,
  AutocompleteProps,
  Checkbox,
  TextField,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    '& .MuiInputBase-root': {
      height: '55px',
    },
  },
}));

export interface IMultiSelectListItem {
  label: string;
  value: string | number;
}

interface IProps
  extends Omit<
    AutocompleteProps<IMultiSelectListItem, true, false, false>,
    'multiple' | 'disableCloseOnSelect' | 'renderOption' | 'renderInput'
  > {
  placeholder?: string;
}

export function MultiSelect(props: IProps) {
  const styles = useStyles();
  const { placeholder, ...rest } = props;

  return (
    <Autocomplete
      className={`${styles.container} ${props.className}`}
      multiple
      disableCloseOnSelect
      renderOption={(optionProps, option, { selected }) => (
        <li {...optionProps}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} placeholder={placeholder} />
      )}
      /*renderTags={(value, getTagProps) => {
        //TODO: fix this to show max tags possible within the width of this component
        return null;
      }}*/
      {...rest}
    />
  );
}
