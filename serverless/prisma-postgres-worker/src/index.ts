import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		const user = await prisma.user.create({
			data: {
				email: `Jon${Math.ceil(Math.random() * 1000)}@gmail.com`,
				name: 'Jon Doe',
				age: 23,
			},
		});

		const userCount = await prisma.user.count();

		return Response.json(user);
	},
} satisfies ExportedHandler<Env>;
