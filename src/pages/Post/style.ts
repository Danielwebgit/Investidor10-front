import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    padding-top: 30px;
    width: 100%;
    height: 100%;
    justify-content: center;

    .post-title {
        height: 32px;
        width: 420px;
        background-color: #9b8e7c;
        font-size: 16px;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 5px;
    }

    .post-content {
        margin-top: 32px;
        height: 336px;
        width: 420px;
        background-color: antiquewhite;
        border-radius: 5px;
        
    }

    .post-footer {
        margin-top: 16px;
        height: 48px;
        width: 420px;
        border-radius: 5px;
    }

    .box-button {
        display: flex;       
        padding: 5px;
        justify-content: center;
    }
`;