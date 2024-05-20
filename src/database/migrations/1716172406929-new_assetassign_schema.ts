import { MigrationInterface, QueryRunner } from "typeorm";

export class NewAssetassignSchema1716172406929 implements MigrationInterface {
    name = 'NewAssetassignSchema1716172406929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_notification\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`timestamp\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`parameter\` varchar(255) NOT NULL, \`thresholdValue\` int NOT NULL, \`status\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userProfile\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_crop_budget\` (\`id\` int NOT NULL AUTO_INCREMENT, \`totalCost\` int NOT NULL, \`expectedRevenue\` int NOT NULL, \`expectedProfit\` int NOT NULL, \`cropId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_fertilizer_schedule\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`details\` varchar(255) NOT NULL, \`cropId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_crop\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`variety\` varchar(255) NOT NULL, \`plantDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`cropeAmount\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`polytunnelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_sensor_reading\` (\`id\` int NOT NULL AUTO_INCREMENT, \`timestamp\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`temperature\` int NOT NULL, \`humidity\` int NOT NULL, \`soilMoisture\` int NOT NULL, \`lightIntensity\` int NOT NULL, \`sensorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_sensor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`sensorId\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL, \`polytunnelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_polytunnel\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`area\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_irrigation_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`actuatorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_actuator\` (\`id\` int NOT NULL AUTO_INCREMENT, \`actuatorId\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL, \`controlCommand\` varchar(255) NOT NULL, \`polytunnelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_actuator_command\` (\`id\` int NOT NULL AUTO_INCREMENT, \`command\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_notification\` ADD CONSTRAINT \`FK_327b0220f78f6e4842dafadf17b\` FOREIGN KEY (\`userId\`) REFERENCES \`tbl_user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_crop_budget\` ADD CONSTRAINT \`FK_9ec7dd456585a632de678eb070a\` FOREIGN KEY (\`cropId\`) REFERENCES \`tbl_crop\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_fertilizer_schedule\` ADD CONSTRAINT \`FK_8bd8660ddd2db9ae3895102b92f\` FOREIGN KEY (\`cropId\`) REFERENCES \`tbl_crop\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_crop\` ADD CONSTRAINT \`FK_202fe5d3aab78b8ae213b2481e8\` FOREIGN KEY (\`polytunnelId\`) REFERENCES \`tbl_polytunnel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_sensor_reading\` ADD CONSTRAINT \`FK_dbea1454d25c466d5f16d27a67b\` FOREIGN KEY (\`sensorId\`) REFERENCES \`tbl_sensor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_sensor\` ADD CONSTRAINT \`FK_aea9da28ebe61097ba0d9ec4750\` FOREIGN KEY (\`polytunnelId\`) REFERENCES \`tbl_polytunnel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_polytunnel\` ADD CONSTRAINT \`FK_159e3333c8069e3de96a047ab4e\` FOREIGN KEY (\`userId\`) REFERENCES \`tbl_user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_irrigation_log\` ADD CONSTRAINT \`FK_96065972661d7bea6bcae498f2d\` FOREIGN KEY (\`actuatorId\`) REFERENCES \`tbl_actuator\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_actuator\` ADD CONSTRAINT \`FK_2eec791d81e0de6ad45420a48ff\` FOREIGN KEY (\`polytunnelId\`) REFERENCES \`tbl_polytunnel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_actuator\` DROP FOREIGN KEY \`FK_2eec791d81e0de6ad45420a48ff\``);
        await queryRunner.query(`ALTER TABLE \`tbl_irrigation_log\` DROP FOREIGN KEY \`FK_96065972661d7bea6bcae498f2d\``);
        await queryRunner.query(`ALTER TABLE \`tbl_polytunnel\` DROP FOREIGN KEY \`FK_159e3333c8069e3de96a047ab4e\``);
        await queryRunner.query(`ALTER TABLE \`tbl_sensor\` DROP FOREIGN KEY \`FK_aea9da28ebe61097ba0d9ec4750\``);
        await queryRunner.query(`ALTER TABLE \`tbl_sensor_reading\` DROP FOREIGN KEY \`FK_dbea1454d25c466d5f16d27a67b\``);
        await queryRunner.query(`ALTER TABLE \`tbl_crop\` DROP FOREIGN KEY \`FK_202fe5d3aab78b8ae213b2481e8\``);
        await queryRunner.query(`ALTER TABLE \`tbl_fertilizer_schedule\` DROP FOREIGN KEY \`FK_8bd8660ddd2db9ae3895102b92f\``);
        await queryRunner.query(`ALTER TABLE \`tbl_crop_budget\` DROP FOREIGN KEY \`FK_9ec7dd456585a632de678eb070a\``);
        await queryRunner.query(`ALTER TABLE \`tbl_notification\` DROP FOREIGN KEY \`FK_327b0220f78f6e4842dafadf17b\``);
        await queryRunner.query(`DROP TABLE \`tbl_actuator_command\``);
        await queryRunner.query(`DROP TABLE \`tbl_actuator\``);
        await queryRunner.query(`DROP TABLE \`tbl_irrigation_log\``);
        await queryRunner.query(`DROP TABLE \`tbl_polytunnel\``);
        await queryRunner.query(`DROP TABLE \`tbl_sensor\``);
        await queryRunner.query(`DROP TABLE \`tbl_sensor_reading\``);
        await queryRunner.query(`DROP TABLE \`tbl_crop\``);
        await queryRunner.query(`DROP TABLE \`tbl_fertilizer_schedule\``);
        await queryRunner.query(`DROP TABLE \`tbl_crop_budget\``);
        await queryRunner.query(`DROP TABLE \`tbl_user\``);
        await queryRunner.query(`DROP TABLE \`tbl_notification\``);
    }

}
