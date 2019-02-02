package com.spbweb.entity;

import java.io.Serializable;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

public class Mapdetail implements Serializable {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapDetail.map_id
     *
     * @mbg.generated
     */
    private Integer mapId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapDetail.map_name
     *
     * @mbg.generated
     */
    private String mapName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapDetail.map_owner
     *
     * @mbg.generated
     */
    private String mapOwner;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column mapDetail.map_setup_date
     *
     * @mbg.generated
     */
    private Timestamp mapSetupDate;

    private String mapDescrpt;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapDetail
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;


    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapDetail.map_id
     *
     * @return the value of mapDetail.map_id
     *
     * @mbg.generated
     */
    public Integer getMapId() {
        return mapId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapDetail.map_id
     *
     * @param mapId the value for mapDetail.map_id
     *
     * @mbg.generated
     */
    public void setMapId(Integer mapId) {
        this.mapId = mapId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapDetail.map_name
     *
     * @return the value of mapDetail.map_name
     *
     * @mbg.generated
     */
    public String getMapName() {
        return mapName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapDetail.map_name
     *
     * @param mapName the value for mapDetail.map_name
     *
     * @mbg.generated
     */
    public void setMapName(String mapName) {
        this.mapName = mapName == null ? null : mapName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapDetail.map_owner
     *
     * @return the value of mapDetail.map_owner
     *
     * @mbg.generated
     */
    public String getMapOwner() {
        return mapOwner;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapDetail.map_owner
     *
     * @param mapOwner the value for mapDetail.map_owner
     *
     * @mbg.generated
     */
    public void setMapOwner(String mapOwner) {
        this.mapOwner = mapOwner == null ? null : mapOwner.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column mapDetail.map_setup_date
     *
     * @return the value of mapDetail.map_setup_date
     *
     * @mbg.generated
     */
    public Timestamp getMapSetupDate() {
        return mapSetupDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column mapDetail.map_setup_date
     *
     * @param mapSetupDate the value for mapDetail.map_setup_date
     *
     * @mbg.generated
     */
    public void setMapSetupDate(Timestamp mapSetupDate) {
        this.mapSetupDate = mapSetupDate;
    }

    public String getMapDescrpt()  { return mapDescrpt; }

    public void setMapDescrpt(String mapDescrpt) { this.mapDescrpt = mapDescrpt; }



    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapDetail
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", mapId=").append(mapId);
        sb.append(", mapName=").append(mapName);
        sb.append(", mapOwner=").append(mapOwner);
        sb.append(", mapSetupDate=").append(mapSetupDate);
        sb.append(", mapDescrpt=").append(mapDescrpt);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}