import React, { useContext, useState } from 'react';

import APIsManagementContext from '../context/APIsManagementContext';

import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import ClientDetailsModal from '../components/ClientDetailsModal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const ClientsList = ({ history: { location: { pathname } } }) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [modalClientId, setModalClientId] = useState('');

  const { clientsList } = useContext(APIsManagementContext);

  // CAPTURA ID DA INTEGRAÇÃO SELECIONADA POR MEIO DO URL
  const integrationId = pathname.split('/')[2].slice(1);

  const handleDetailsModal = (clientId) => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
    setModalClientId(clientId);
  };

  return (
    <>
      { !!isDetailsModalOpen && <ClientDetailsModal
        clientId={ modalClientId }
        handleClose={ handleDetailsModal }
        isOpen={ isDetailsModalOpen }
      /> }
      <Table
        aria-label="simple table"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px 0px rgb(88 88 88 / 20%)",
          my: 3,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>Cliente</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Reponsável</TableCell>
            <TableCell align="center" sx={{ fontWeight: "600", width: "140px" }}>Detalhes</TableCell>
            <TableCell align="center" sx={{ fontWeight: "600", width: "120px" }}>Cron</TableCell>
            <TableCell align="center" sx={{ fontWeight: "600", width: "120px" }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            clientsList
              .filter(({ integracao_id }) => integracao_id === integrationId)
                .map(({ nome, status, cron, responsavel, id }) => (
                  <TableRow
                    key={ nome }
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ py: 1 }} >{ nome }</TableCell>
                    <TableCell sx={{ py: 1 }}>{ responsavel }</TableCell>
                    <TableCell align="center" sx={{ py: 1 }}>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={ () => handleDetailsModal(id) }
                        sx={{ borderRadius: "10px" }}
                      >
                        Ver mais
                      </Button>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ py: 1 }}
                    >
                      {
                        !cron
                        ? (
                          <Box
                            sx={{
                              backgroundColor: "#b40803",
                              borderRadius: "20px",
                              color: "white",
                              height: "36px",
                              paddingTop: "8px",
                              width: "90px",
                            }}
                          >
                            NÃO
                          </Box>
                        )
                        : (
                          <Box
                            sx={{
                              backgroundColor: "#00964f",
                              borderRadius: "20px",
                              color: "white",
                              height: "36px",
                              paddingTop: "8px",
                              width: "90px",
                            }}
                          >
                            SIM
                          </Box>
                        )
                      }
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ py: 1 }}
                    >
                      {
                        !status
                        ? (
                          <Box
                            sx={{
                              backgroundColor: "#b40803",
                              borderRadius: "20px",
                              color: "white",
                              height: "36px",
                              paddingTop: "8px",
                              width: "90px",
                            }}
                          >
                            INATIVO
                          </Box>
                        )
                        : (
                          <Box
                            sx={{
                              backgroundColor: "#00964f",
                              borderRadius: "20px",
                              color: "white",
                              height: "36px",
                              paddingTop: "8px",
                              width: "90px",
                            }}
                          >
                            ATIVO
                          </Box>
                        )
                      }
                    </TableCell>
                  </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </>
  );
};

export default ClientsList;
