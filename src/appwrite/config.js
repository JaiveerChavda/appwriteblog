import { Client, ID, TablesDB,Storage, Query } from "appwrite";
import config from "../config/config";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        
        try {
            return await this.databases.createRow({
            databaseId: config.appwriteDatabaseId,
            tableId: config.appwriteTableId,
            rowId: ID.unique(),
            data: {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        })
            
        } catch (error) {
            console.log("config service :: createPost error",error)
        }
    }

    async updatePost(rowId,{title, content, featuredImage, status}){
        let post = {
            title,content,featuredImage,status
        };
        try {
            return await this.databases.updateRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteTableId,
                rowId: rowId,
                data: post,
            })
        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(rowId){
        try {
            await this.databases.deleteRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteTableId,
                rowId: rowId
            })
            return true;
        } catch (error) {
            console.log("config service :: createPost error",error);
            return false;
        }
    }

    async getPost(rowId){
        try {
            return await this.databases.getRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteTableId,
                rowId: rowId,
            })
        } catch (error) {
            console.log("config service :: getPost error",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listRows({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteTableId,
                queries: queries,
            })
        } catch (error) {
            console.log("config service :: getPosts error",error);
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: config.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            })
        } catch (error) {
            console.log("config service :: uploadFile error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: config.appwriteBucketId,
                fileId: fileId
            })
            return true;
        } catch (error) {
            console.log("config service :: deleteFile error",error);
            return false;            
        }
    }

    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview({
            bucketId: config.appwriteBucketId,
            fileId: fileId
        })
    }

    getFileView(fileId)
    {
        return this.bucket.getFileView({
            bucketId: config.appwriteBucketId,
            fileId: fileId
        })
    }

}

const service = new Service()

export default service