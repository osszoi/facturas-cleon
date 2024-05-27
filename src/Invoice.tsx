import { Grid } from '@mui/material';
import CleonLogo from './assets/logo.png';
import { Card } from './Card';

const padWithZeros = (number: number, length: number) => {
	// Convert the number to a string
	let str = number.toString();
	// Calculate the number of zeros needed
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
};

const generateRandomNumber = (length: number) => {
	let result = '';
	const characters = '0123456789';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
};

function getSpanishDateString() {
	const monthNames = [
		'enero',
		'febrero',
		'marzo',
		'abril',
		'mayo',
		'junio',
		'julio',
		'agosto',
		'septiembre',
		'octubre',
		'noviembre',
		'diciembre'
	];

	const now = new Date();
	const day = now.getDate();
	const month = monthNames[now.getMonth()];
	const year = now.getFullYear();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');

	return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export const Invoice = () => {
	const n = new URLSearchParams(window.location.search).get('n') || 1;
	const authorizationNumber = generateRandomNumber(34);

	const date = getSpanishDateString();

	return (
		<Grid
			container
			spacing={4}
			rowSpacing={3}>
			<Grid
				item
				xs={6}>
				<div className="flex justify-center">
					<img
						src={CleonLogo}
						className="max-w-full max-h-52"
					/>
				</div>

				<Card>
					<h3>LEON SOFTWARE LSOFT S.A.S.</h3>

					<table
						className="mt-2"
						style={{ borderSpacing: '0 10px', borderCollapse: 'separate' }}>
						<colgroup>
							<col width="90px" />
							<col />
						</colgroup>

						<tr>
							<td className="text-sm">
								<h5>Dir. Matriz:</h5>
							</td>

							<td className="text-sm">
								LOS RIOS / QUEVEDO / QUEVEDO / 12 DE OCTUBRE 307 Y DECIMA
								PRIMERA
							</td>
						</tr>

						<tr>
							<td className="text-sm">
								<h5>Dir. Surcursal:</h5>
							</td>

							<td className="text-sm">
								LOS RIOS / QUEVEDO / QUEVEDO / 12 DE OCTUBRE 307 Y DECIMA
								PRIMERA
							</td>
						</tr>
					</table>

					<div
						className="flex"
						style={{ marginBottom: '5px', gap: '15px' }}>
						<div className="w-full">Contribuyente Régimen RIMPE</div>

						<div className="w-full">Obligado a llevar contabilidad: SI</div>
					</div>
				</Card>
			</Grid>

			<Grid
				item
				xs={6}>
				<Card>
					<div className="flex text-lg">
						<div className="w-full flex justify-center">
							<h5>RUC:</h5>
						</div>

						<div className="w-full">
							<h5>1291786142001</h5>
						</div>
					</div>

					<div className="flex mt-2">
						<div className="w-full flex justify-center text-xl">
							<h2>FACTURA</h2>
						</div>
					</div>

					<div className="flex text-xl mt-2">
						<div className="w-2/5 flex justify-center">
							<h5>No.</h5>
						</div>

						<div className="w-full text-lg">
							<h5>001-100-{padWithZeros(n as number, 9)}</h5>
						</div>
					</div>

					<div className="flex mt-4">
						<div className="w-full flex justify-center">
							<h2>NÚMERO DE AUTORIZACIÓN</h2>
						</div>
					</div>

					<div className="flex mt-4">
						<div className="w-full flex justify-center">
							<h2>{authorizationNumber}</h2>
						</div>
					</div>

					<table
						className="mt-2"
						style={{ borderSpacing: '0 10px', borderCollapse: 'separate' }}>
						<colgroup>
							<col width="130px" />
							<col />
						</colgroup>

						<tr>
							<td>Fecha y hora de autorización</td>

							<td className="font-bold">{date}</td>
						</tr>

						<tr>
							<td>Ambiente:</td>

							<td>PRODUCCIÓN</td>
						</tr>

						<tr>
							<td>Emisión:</td>

							<td>NORMAL</td>
						</tr>
					</table>

					<p className="mt-2">CLAVE DE ACCESO</p>

					<link
						href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap"
						rel="stylesheet"></link>
					<div
						style={{
							fontFamily: "'Libre Barcode 39 Text', cursive",
							fontSize: '20px'
						}}>
						{authorizationNumber}
					</div>
				</Card>
			</Grid>

			<Grid
				item
				xs={12}>
				<Card>
					<Grid
						container
						rowSpacing={2}>
						<Grid
							item
							xs={5}
							className="font-bold">
							Razón Social / Nombres y Apellidos:
						</Grid>

						<Grid
							item
							xs={7}>
							KARSHARING SPA
						</Grid>

						<Grid
							item
							xs={6}>
							<Grid container>
								<Grid
									item
									xs={5}
									className="font-bold">
									RUC / CI:
								</Grid>

								<Grid
									item
									xs={7}>
									76530509-8
								</Grid>

								<Grid
									item
									xs={5}
									className="font-bold">
									Fecha Emisión:
								</Grid>

								<Grid
									item
									xs={7}>
									{date.split(' ')[0]}
								</Grid>
							</Grid>
						</Grid>

						<Grid
							item
							xs={6}>
							<p className="font-bold">Referencia:</p>
							<p className="font-bold">Guía Remisión:</p>
						</Grid>
					</Grid>
				</Card>
			</Grid>

			<Grid
				item
				xs={12}>
				<table
					style={{
						fontSize: '12px',
						maxWidth: '100vw'
					}}>
					<colgroup>
						<col />
						<col />
						<col />
						<col width="50%" />
						<col />
						<col width="80px" />
						<col />
					</colgroup>

					<thead className="bg-gray-200">
						<th className="text-center">Cod Principal</th>
						<th className="text-center">Cod Aux</th>
						<th className="text-center">Cantidad</th>
						<th>Descripción</th>
						<th className="text-right">Precio Unitario</th>
						<th className="text-right">Descuento</th>
						<th className="text-right">Precio Total</th>
					</thead>

					<tbody>
						<tr className="border-gray-200 border-b">
							<td className="text-center">DEV-BE</td>
							<td className="text-center">0001</td>
							<td className="text-center">1</td>
							<td>Servicios desarrollador backend</td>
							<td className="text-right">2.500,0000</td>
							<td className="text-right">0,00</td>
							<td className="text-right">2.500,00</td>
						</tr>

						<tr className="border-gray-200 border-b">
							<td className="text-center">DEV-FE</td>
							<td className="text-center">0002</td>
							<td className="text-center">1</td>
							<td>Servicios desarrollador frontend</td>
							<td className="text-right">2.042,0000</td>
							<td className="text-right">0,00</td>
							<td className="text-right">2.042,00</td>
						</tr>
					</tbody>
				</table>
			</Grid>

			<Grid
				item
				xs={12}>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={7}>
						<Card>
							<p className="text-xl font-bold mb-2">Información Adicional</p>

							<div className="flex justify-between mb-1">
								<span className="font-bold">Dirección:</span>
								<span>Pérez Valenzuela 1098, Providencia, Santiago</span>
							</div>

							<div className="flex justify-between mb-1">
								<span className="font-bold">Teléfono:</span>
								<span>+56 2 2841 8008</span>
							</div>

							<div className="flex justify-between mb-1">
								<span className="font-bold">Email:</span>
								<span>pcornejo@awto.cl</span>
							</div>
						</Card>

						<div className="mt-4">
							<Card>
								<table className="w-full">
									<tr>
										<td className="font-bold">Forma Pago</td>
										<td className="font-bold">Valor</td>
										<td className="font-bold">Plazo</td>
										<td className="font-bold">Tiempo</td>
									</tr>

									<tr>
										<td style={{ fontSize: '12px' }}>
											Sin utilización del sistema financiero
										</td>
										<td style={{ fontSize: '12px' }}>4.542,00</td>
										<td></td>
										<td></td>
									</tr>
								</table>
							</Card>
						</div>
					</Grid>

					<Grid
						item
						xs={5}>
						<div className="flex justify-between border-gray-200 border-b">
							<span>SUBTOTAL 0%</span>
							<span>4.542,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>SUBTOTAL 12%</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>SUBTOTAL 8%</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>SUBTOTAL NO SUJETO DE IVA</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>SUBTOTAL EXENTO</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>SUBTOTAL SIN IMPUESTOS</span>
							<span>4.542,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>DESCUENTO</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>ICE</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>IVA 12%</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>IVA 8%</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>IRBPNR</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between border-gray-200 border-b">
							<span>PROPINA 0,00%</span>
							<span>0,00</span>
						</div>

						<div className="flex justify-between bg-gray-200 font-bold">
							<span>TOTAL</span>
							<span>4.542,00</span>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
