// Footer.jsx

import styles from './footer.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, IconButton } from '@mui/material';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Alunorte</h2>
        <h4>Redes Sociales:</h4>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <IconButton
            aria-label="whatsapp"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            <WhatsAppIcon fontSize="large" style={{ color: '#25D366' }} />
          </IconButton>
          <IconButton
            aria-label="instagram"
            onClick={() => window.open('https://www.instagram.com/alu.zonanorte/', '_blank')}
          >
            <InstagramIcon fontSize="large" style={{ color: '#F50CB0' }} />
          </IconButton>
          <IconButton
            aria-label="facebook"
            onClick={() => window.open('https://www.facebook.com/profile.php?id=61557173683201', '_blank')}
          >
            <FacebookIcon fontSize="large" style={{ color: '#1877F2' }} />
          </IconButton>
        </Box>
        <h4>Email:</h4>
        <p>alunorte.ventas@gmail.com</p>
      </div>
      <div className={styles.right}>
        <h4>Dirección:</h4>
        <p>Victorino de la Plaza 1659, Zarate - Buenos Aires, Argentina</p>
        <h4>Teléfono:</h4>
        <p>+54 3487 522074 // 54 3487 49  7946</p>
      </div>
    </div>
  );
}

export default Footer;



