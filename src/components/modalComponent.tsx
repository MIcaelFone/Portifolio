import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
export interface ModalComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string; 
  onClose: () => void;
}
export function ModalComponent({title,description,imageUrl,link,onClose}:ModalComponentProps)
{
    
    return (
        <>
        <Modal
            size="lg"
            show={true}
            onHide={() => onClose()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column">
                    <img src={imageUrl} alt={description} className="img-fluid" />
                    <p>{description}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">Ver no Github</Button>
                </a>   
            </Modal.Body>
        </Modal> 
        </>
    )
}
