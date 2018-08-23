export function customTranslate(string) {
  switch (string) {
    case 'address_import_schema_select':
      return 'Map your fields';
    case 'address_import_schema_help':
      return 'Select what headers and values of the CSV match.';
    case 'address_import_schema_name':
      return 'Preset name';
    case 'address_home_newpasswordrequested_title':
      return 'success';
    case 'address_field_pattern_no_match':
      return 'invalid value';
    default:
      return string;
  }
}

export const returnInput = str => str;

export function getRegexForFieldName(field) {
  switch (field) {
    case 'age':
      return /\s[0-1]{1}[0-9]{0,2}/;
    case 'telephone': case 'telephone2':
      return /^[0-9]{0,10}/;
    default:
      return null;
  }
}
