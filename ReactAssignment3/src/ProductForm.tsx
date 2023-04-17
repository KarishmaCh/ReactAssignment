import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

interface Props {
    onSave: (name: string, description: string, quantity: number, price: number) => void;
}

const ProductForm: React.FC<Props> = ({ onSave }) => {
    const [showStep, setShowStep] = useState(true);
    
    const handleCancelClick = () => {
        setShowStep(false);
    };

    const handleFinishClick = (name: string, description: string, quantity: number, price: number) => {
        onSave(name, description, quantity, price);
        setShowStep(false);
    };

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const steps = ["Name", "Description", "Quantity & Price"];

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(event.target.value));
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const handleNext = () => {
        switch (activeStep) {
            case 0:
                if (name.trim() === "") {
                    alert("Please enter a name.");
                    return;
                } else if (!/^[a-zA-Z\s]{1,30}$/.test(name)) {
                    alert("Name must be only letters and maximum 30 characters long.");
                    return;
                }
                break;
            case 1:
                if (description.trim() === "") {
                    alert("Please enter a description.");
                    return;
                } else if (!/^[a-zA-Z\s]*$/.test(description)) {
                    alert("Description must be only letters and spaces.");
                    return;
                } else if (description.length > 100) {
                    alert("Description can be maximum 100 characters long.");
                    return;
                }
                break;
            default:
                break;
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const renderStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name-input">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name-input"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <div className="form-group">
                            <label htmlFor="description-input">Description:</label>
                            <textarea
                                className="form-control"
                                id="description-input"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="form-group">
                            <label htmlFor="quantity-input">Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity-input"
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price-input">Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price-input"
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {showStep && (
                <div>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {renderStepContent(activeStep)}
                    <div>
                        {activeStep === steps.length - 1 ? (
                            <div>
                                <button
                                    className="btn btn-secondary mr-2"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => handleFinishClick(name, description, quantity, price)}>
                                    Finish
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    className="btn btn-secondary mr-2"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </button>
                                <button className="btn btn-primary ml-2" onClick={handleNext}>
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductForm;
