const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteTinyEditorApiKey: String(import.meta.env.VITE_APPWRITE_TINY_EDITOR_API_KEY),
    supabaseUrl: String(import.meta.env.VITE_SUPABASE_URL),
    supabasePublishableKey: String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)
}

export default config;