import Head from 'next/head';
import { supabase } from '../utils/supabaseClient';

export default function Home() {
	return (
		<div>
			<Head>
				<title>WorkDiary Home</title>
				<meta name='description' content='Track your work properly' />
			</Head>

			<main>
				<h1>Welcome to Workdiary</h1>
			</main>
		</div>
	);
}
