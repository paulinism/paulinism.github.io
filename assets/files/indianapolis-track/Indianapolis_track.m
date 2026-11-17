% Indianapolis_track.m
% 3D reconstruction of the Shell Eco-marathon circuit at Indianapolis Motor Speedway
% from GPS fixes (latitude, longitude, altitude). Plain-script copy of Indianapolis_track.mlx.
% Data: sem_2023_us.xlsx — 2,696 GPS points (columns: Lat, Lon, Alt [m]).

clc
clear all
close all

data = xlsread('sem_2023_us.xlsx');

x = data(:,1);   % latitude
y = data(:,2);   % longitude
z = data(:,3);   % altitude [m]

plot3(x, y, z, 'o');

xlabel('Lat')
ylabel('Lon')
zlabel('Alt [m]')

zlim([210 230])
