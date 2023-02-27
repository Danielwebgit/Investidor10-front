import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-left: 435px;
    margin-top: 34px;
    
    .link-action {
        display: flex;
    }

    .bloco {
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 300px;
        background-color: #ccc;
        border-radius: 10px;
        margin-top: 34px;
        margin: 10px;
        padding: 10px;
        justify-content: space-between;

    }

    .titulo {
        display: flex;
        justify-content: center;
    }

    .but-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        background: #0066A2;
        color: white;
        border-style: outset;
        border-color: #0066A2;
        height: 50px;
        width: 100px;
        font: bold15px arial,sans-serif;
        text-shadow: none;
        cursor: pointer;
    }

    button:hover {
        background: #93a49c;
    }

    .div-cont {
        flex: 1 1 300px;
        margin: 10px;
    }
`;