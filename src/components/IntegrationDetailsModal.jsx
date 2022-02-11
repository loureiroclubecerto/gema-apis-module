import React, { useContext, useEffect, useState } from 'react';

import { getIntegration } from '../services';

import APIsManagementContext from '../context/APIsManagementContext';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import StyledDialog from './StyledDialog';
import Typography from '@mui/material/Typography';

const IntegrationDetailsModal = ({ isOpen, handleClose, integrationId }) => {
  const [integrationSelected, setIntegrationSelected] = useState('');

  const { categoriesList } = useContext(APIsManagementContext);

  // RECUPERA DADOS DA INTEGRAÇÃO ESCOLHIDA E SALVA DO ESTADO
  useEffect(() => {
    setIntegrationSelected(getIntegration(integrationId));
  }, []);

  return (
    <StyledDialog
      open={isOpen}
      onClose={() => handleClose(integrationId)}
      scroll={"paper"}
      maxWidth="md"
      fullWidth
      sx={{ borderRadius: "10px" }}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle sx={{ mt: 1 }} id="scroll-dialog-title">
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "#00964f",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-around",
            p: 2,
          }}
        >

          { /* NOME DA INTEGRAÇÃO */ }
          <Typography
            component="h2"
            fontWeight="600"
            id="transition-modal-title"
            sx={{
              color: "white",
              flexGrow: 1,
              display: "flex",
              alignItems: "baseline",
            }}
            variant="h4"
          >
            { integrationSelected.api_empresa }
            <Typography
              component="p"
              id="transition-modal-title"
              sx={{ color: "white", ml: 1 }}
              variant="subtitle1"
            >
              { !!integrationSelected && categoriesList
                .find((category) => category.categoria_id === integrationSelected.categoria_id)
                .categoria_nome }
            </Typography>
          </Typography>

          { /* VISUALIZAÇÃO DA ROTINA CRON */ }
          {
            !integrationSelected.cron
            ? (
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  color: "#b40803",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  height: "36px",
                  paddingTop: "8px",
                  textAlign: "center",
                  width: "120px",
                }}
              >
                CRON: NÃO
              </Box>
            )
            : (
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  color: "#00964f",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  height: "36px",
                  paddingTop: "8px",
                  textAlign: "center",
                  width: "120px",
                }}
              >
                SIM
              </Box>
            )
          }

          { /* VISUALIZAÇÃO DO STATUS */ }
          {
            !integrationSelected.status
            ? (
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  color: "#b40803",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  height: "36px",
                  ml: 1,
                  paddingTop: "8px",
                  textAlign: "center",
                  width: "140px",
                }}
              >
                STATUS: INATIVO
              </Box>
            )
            : (
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  color: "#00964f",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  height: "36px",
                  ml: 1,
                  paddingTop: "8px",
                  textAlign: "center",
                  width: "140px",
                }}
              >
                STATUS: ATIVO
              </Box>
            )
          }
        </Box>
      </DialogTitle>

      <DialogContent sx={{ mb: 0.5 }}>
        <Box sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px 0px rgb(88 88 88 / 20%)",
          mt: 1.5,
          p: 2,
        }}>
          <Typography fontWeight="600" sx={{ mb: 1 }}>
            Responsável
          </Typography>
          <Box sx={{
            backgroundColor: "#efefef",
            borderRadius: "10px",
            mt: 1,
            mx: 1,
            p: 2,
          }}>
            <Typography>
              Nome: { !!integrationSelected && integrationSelected.responsavel.nome }
            </Typography>
          </Box>
          <Box sx={{
            backgroundColor: "#efefef",
            borderRadius: "10px",
            mt: 1,
            mx: 1,
            p: 2,
          }}>
            <Typography>
              Email: { !!integrationSelected && integrationSelected.responsavel.email }
            </Typography>
          </Box>
          {
            !!integrationSelected && integrationSelected.responsavel.telefone.map((telefone) => (
              <Box
                key={ telefone }
                sx={{
                  backgroundColor: "#efefef",
                  borderRadius: "10px",
                  mt: 1,
                  mx: 1,
                  p: 2,
                }}
              >
                <Typography>
                  Telefone: { telefone }
                </Typography>
              </Box>
            ))
          }
        </Box>

        { /* ACESSO AO ANEXO */ }
        <Box sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px 0px rgb(88 88 88 / 20%)",
          mt: 2,
          p: 2,
        }}>
          <Typography fontWeight="600" sx={{ mb: 1 }}>
            Anexos
          </Typography>
          <Link href={ integrationSelected.anexo } target="_blank" underline="none">
            <Button
              color="primary"
              sx={{ borderRadius: "10px" }}
              type=''
              variant="contained"
            >
              Baixar arquivo
            </Button>
          </Link>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default IntegrationDetailsModal;
