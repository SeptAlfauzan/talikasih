import { WhatsAppOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

export default function SuccessDonate() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-blue-50">
            <div className="w-1/4 rounded-lg  bg-white">
                <Result
                    status="success"
                    title="Yay, berhasil menambahkan donasi!"
                    subTitle="silahkan hubungi nomor whatsapp dibawah ini untuk mengirim bukti transfer "
                    extra={[
                        <div className="w-full" key='child'>
                            <span key='whatsapp number' className="text-emerald-500 block mb-4 font-bold">+62 813-5747-6730</span>
                            <a href='https://wa.me/+6281357476730' target={'_blank'} rel="noreferrer">
                                <button className="px-4 py-1 rounded flex items-center text-lg mx-auto bg-emerald-600 hover:bg-emerald-400 text-white gap-3" key="console">
                                    Chat di whatsapp <WhatsAppOutlined />
                                </button>
                            </a>
                        </div>
                    ]}
                />
            </div>
        </div>
    )
}