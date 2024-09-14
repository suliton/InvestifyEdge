import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getAllAdminTransaction } from '../../../api/query';
import { confirmTransaction } from '../../../api/mutation';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
import { IAllTransaction, IErrorResponse } from '../../../interface';



const AdminTransactionHistory = () => {
    const navigate = useNavigate()
    const [allTransaction, setAllTransaction] = useState<IAllTransaction[]>([]);
    // const [confirmedTransactions, setConfirmedTransactions] = useState<string[]>([]); // Track confirmed transactions

    const { data, isLoading, isError } = useQuery(['getAllAdminTransaction'], getAllAdminTransaction, {
        onError: (err: IErrorResponse) => {
          if (err?.response?.status === 401) {
            navigate('/admin-login')
            toast.error(err?.response?.data?.message)
          }
        }
    });

    const { mutate } = useMutation(confirmTransaction, {
        onSuccess: (data) => {
            console.log('Transaction confirmed:', data);
            toast.success(data?.data?.message);
            // setConfirmedTransactions((prevConfirmed) => [...prevConfirmed, data.data.transaction._id]); // Update confirmed transactions
        },
        onError: (error: IErrorResponse) => {
            console.error('Error confirming transaction:', error);
            toast.error(error?.response?.data?.message)
        },
    });

    useEffect(() => {
        if (data?.data?.data) {
            setAllTransaction(data.data.data);
        }
    }, [data]);

    const handleConfirm = (transactionId: string) => {
        mutate(transactionId);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>An error occurred while fetching the data.</p>;
    }

    return (
        <div className="AllUser">
            {/* <h2>Transaction History</h2> */}
            {allTransaction.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date of Deposit</th>
                            <th>Payment Method</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTransaction.map((transaction: IAllTransaction) => (
                            <tr key={transaction._id}>
                                <td data-label="Amount">{transaction.withdrawable_balance}</td>
                                <td data-label="Status">{transaction.status}</td>
                                <td data-label="Date of Deposit">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                                <td data-label="Payment Method">{transaction.payment_method}</td>
                                <td data-label="Actions">
                                    <button onClick={() => handleConfirm(transaction._id)} disabled={transaction.status === 'completed'} style={{backgroundColor: '#4CAF50', padding: '5px'}}>
                                        {transaction.status == 'completed' ? 'Payment Confirmed' : 'Confirm'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
};

export default AdminTransactionHistory;
