import { v } from "convex/values"
import { mutation } from "./_generated/server"

export const createFile = mutation({
	args: {
		name: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("file", { name: args.name })
	}
})