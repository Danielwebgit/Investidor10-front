import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: #c3b8b8;;
    padding: 10px;
    box-shadow: 0px 5px 20px #000;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
    }

    .menu li a {
        color: #fff;
        display: block;
        text-decoration: none;
        margin-left: 10px;
        padding: 10px 20px 10px 20px;
        border-radius: 8px;
    }
    
    .menu li a:hover {
        background-color: #707998;
    }
  
`;