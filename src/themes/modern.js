export const modernTheme = `
.product-container {
    background: linear-gradient(145deg, #ffffff, #f5f5f5);
    border-radius: 16px;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    overflow: hidden;
}

.product-title {
    font-size: 28px;
    font-weight: 700;
    color: #2d3748;
    letter-spacing: -0.5px;
}

.product-description {
    color: #4a5568;
    font-size: 17px;
}

.features-list li {
    color: #4a5568;
    position: relative;
    padding-left: 24px;
}

.features-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #4299e1;
}`; 