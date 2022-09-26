import "./index.css";
import { Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { UserContext } from "../../Context/UserContext";
import { AppDispatch, ContractType, getContractsRequest, RootState } from "../../redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
var dataSource: ContractType[]

function Contracts() {
  const { user } = React.useContext(UserContext);

  const dispatch = useAppDispatch();
  const contractState = useAppSelector(state => state.contract);
  const columns = [
    {
      title: 'Documento',
      dataIndex: 'docNumber',
      key: 'docNumber'
    },
    {
      title: 'Razão Social',
      dataIndex: 'socialReason',
      key: 'socialReason'
    },
    {
      title: 'Compania',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: 'Produtos',
      dataIndex: 'products',
      key: 'products'
    },
  ]
  useEffect(() => {
    dispatch(getContractsRequest(user.token));
  }, []);

  if (!contractState['loading'] && !contractState['started']) {
    dataSource = contractState['contract'];
    console.log('effect', dataSource)
  }
    
    return (
      <>
        <Table dataSource={dataSource} rowKey="docNumber" columns={columns} />
      </>
    )

}

export default Contracts;