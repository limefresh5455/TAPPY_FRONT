import "./ContactCardInformationField.scss";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  value: string;
  show: boolean;
  label: string;
  onChange: (value: string) => void;
  onHide: () => void;
}

export const ContactCardInformationField: React.FC<Props> = (props) => {

  return (
  <Form.Group>
    {props.show && (
      <>
        <Form.Label>{props.label}</Form.Label>
        <div className="info-field-wrapper">
          <Form.Control 
            type="text"
            onChange={(event) => {
              props.onChange(event.target.value)
            }}
            value={props.value}
          />
          <svg onClick={() => props.onHide()} className="remove-field" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0C3.3525 0 0 3.3525 0 7.5C0 11.6475 3.3525 15 7.5 15C11.6475 15 15 11.6475 15 7.5C15 3.3525 11.6475 0 7.5 0ZM11.25 10.1925L10.1925 11.25L7.5 8.5575L4.8075 11.25L3.75 10.1925L6.4425 7.5L3.75 4.8075L4.8075 3.75L7.5 6.4425L10.1925 3.75L11.25 4.8075L8.5575 7.5L11.25 10.1925Z" fill="white" fill-opacity="0.6"/>
          </svg>
        </div>
      </>
    )}
  </Form.Group>
  );
}