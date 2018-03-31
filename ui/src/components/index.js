
import React from 'react';
import Box from './Box';
import Text from './Text';
import Input from './Input';
import PhoneInput from './PhoneInput';
import OtpInput from './OtpInput';
import Button from './Button';
import Icon from './Icon';
import Alert from './Alert';
import Loader from './Loader';
import ErrorBox from './ErrorBox';
import Header from './Header';
import Query from './Query';
import Mutation from './Mutation';
import { WHITE } from 'colors';

const Row = (props) => (
  <Box flexDirection="row" {...props} />
);

const Col = (props) => (
  <Box flexDirection="column" {...props} />
);

const Screen = (props) => (
  <Col bgColor={WHITE} flex={1} align="center" {...props} />
);

const Text1 = Text.build(32);
const Text2 = Text.build(24);
const Text3 = Text.build(16);
const Text4 = Text.build(14);
const Text5 = Text.build(12);
const Text6 = Text.build(10);

export {
  Row,
  Col,
  Screen,
  Button,
  Input,
  PhoneInput,
  OtpInput,
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Icon,
  Alert,
  Loader,
  ErrorBox,
  Header,
  Query,
  Mutation,
};
