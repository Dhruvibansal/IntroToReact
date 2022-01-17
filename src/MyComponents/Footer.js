import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        width:"100%",
        top: "90vh"
        // here we can add styles
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
           <p className="text=-center">
               Copyright &copy; MytodoList.com</p> 
            
        </footer>
    )
}
