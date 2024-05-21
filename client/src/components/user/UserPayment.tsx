import React, { useState } from "react";

interface FileUploadProps {
  requirementText: string;
  paymentText: string;
}

const UserPayment: React.FC<FileUploadProps> = ({
  requirementText,
  paymentText,
}) => {
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [amountReceived, setAmountReceived] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");

  const handleSend = () => {};

  return (
    <div className="w-full flex flex-col h-full gap-6 relative">
      <p>{requirementText}</p>
      <div>
        <p>Please transfer the desired amount to the following wallet:</p>
        <p className="w-full rounded-lg border border-black text-black bg-slate-100 py-3 px-3">
          {paymentText}
        </p>
      </div>
      <label htmlFor="price">Amount</label>
      <input
        type="text"
        id="price"
        placeholder={"Amount"}
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        className="border border-gray-300 rounded-lg p-2"
      />
      <label htmlFor="currency">Select Currency</label>
      <select
        onChange={(e) => setCurrency(e.target.value)}
        value={currency}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="dollar">Dollar</option>
        <option value="turkey">Turkish Lira</option>
        <option value="dinar">Dinar</option>
      </select>

      <label htmlFor="amountReceived">Amount to be received in dollars</label>
      <input
        type="number"
        id="amountReceived"
        placeholder={"Amount to be received in dollars"}
        value={amountReceived}
        onChange={(e) => setAmountReceived(parseFloat(e.target.value))}
        className="border border-gray-300 rounded-lg p-2"
      />
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        placeholder={"Notes"}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      />
      <div className="flex w-full items-center justify-center bg-grey-lighter">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-primary">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" className="hidden" />
        </label>
      </div>
      <button
        className="w-full bg-white border border-primary text-primary hover:bg-primary absolute bottom-12 text-lg font-bold hover:text-white duration-20 py-3 rounded-lg"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default UserPayment;
