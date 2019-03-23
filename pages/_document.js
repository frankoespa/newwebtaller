// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
					<meta http-equiv='X-UA-Compatible' content='ie=edge' />
					<link rel='shortcut icon' href='/static/favicon.ico' type='image/x-icon' />
					<link rel='icon' href='/static/favicon.ico' type='image/x-icon' />
					<link href='https://fonts.googleapis.com/css?family=Nunito:300,400,600,700|Oswald:400,700' rel='stylesheet' />
					<link
						rel='stylesheet'
						href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'
						integrity='sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU'
						crossorigin='anonymous'
					/>
					<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css' />
					<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css' />
					<script src='https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
