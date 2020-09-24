import React from 'react'

class PhotoContainer extends React.Component {
    render() {
        return (
            <>
                <div className="PhotoContainer" style={{ marginLeft: 'auto', marginRight: 'auto', backgroundImage: "url(https://images.unsplash.com/photo-1544093721-1839bf5af7d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=766&q=80)", height: '60vh', maxWidth: '100vw', backgroundPosition: 'cover' }}>

                </div>

            </>
        )
    }
}

export default PhotoContainer