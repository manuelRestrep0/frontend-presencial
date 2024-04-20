import React from 'react';

export default function Results() {
    return (
        <div style={{
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column', /* Cambié 'row' por 'column' */
        }}>
            {/* Primer div */}
            <div style={{ marginBottom: '20px', border: '1px solid black', borderRadius: '8px', }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quibusdam fugiat iusto itaque, aliquid, voluptate omnis magnam consequuntur sequi animi reiciendis illo possimus veniam distinctio officiis porro voluptates dignissimos blanditiis.
            </div>

            {/* Segundo div */}
            <div style={{ marginBottom: '20px', border: '1px solid black', borderRadius: '8px', }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam provident quam. Dolore similique blanditiis, tempora eligendi natus dicta fugiat ipsa porro cumque sed ipsam repellendus, laboriosam temporibus rem assumenda.
            </div>

            {/* Tercer div */}
            <div style={{ marginBottom: '20px', border: '1px solid black', borderRadius: '8px', }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod accusamus nihil odit animi? Quaerat adipisci autem hic ratione vitae dicta ab neque recusandae odio quam, veniam dolores doloremque eaque quas.
            </div>

            {/* Cuarto div */}
            <div style={{ border: '1px solid black', borderRadius: '8px', }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga similique cumque commodi iusto velit unde accusamus alias repudiandae aliquam repellendus sapiente maiores consectetur nisi laborum, esse ut. Pariatur, est laboriosam.
            </div>
        </div>
    );
}
