import styled from '@emotion/styled';

export const ContactListItemStyles = styled.li`
list-style: none;
margin-top: 15px;
font-weight: 400;
`
export const ContactListStyles = styled.div`
margin: auto;
width: fit-content;
display: block;
text-align: end;
`

export const List = styled.ul`
margin: auto;
width: fit-content;
display: block;
text-align: end;
`;

export const ListItem = styled.li`
list-style: none;
margin-top: 15px;
font-weight: 400;

`;

export const Button = styled.button`
text-decoration: none;
display: inline-block;
padding: 10px 20px;
margin: 5px 10px;
border-radius: 10px;
box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
letter-spacing: 2px;
color: white;
transition: .15s ease-in-out;
cursor: pointer;
border: none;

&:hover {
box-shadow: 0 0 10px 0 #F137A6 inset, 0 0 10px 4px #F137A6;
color: #F137A6;
}

`

export const Notification = styled.p`
  text-align: center;
`;