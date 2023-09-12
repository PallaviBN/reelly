import React from "react";
import { FormattedMessage } from "react-intl";

const translate = (id: string, values: any = {}) => {
  return <FormattedMessage id={id} values={values} />;
};

export default translate;
